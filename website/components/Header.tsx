"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { business, logoAsset } from "../lib/commercialData";

const links = [
  { label: "Maintenance", href: "/services/exterior-facilities-maintenance" },
  { label: "Services", href: "/services" },
  { label: "Commercial work", href: "/commercial-work" },
  { label: "Contact", href: "/contact" }
];

function subscribeTheme(callback: () => void) {
  function syncStorage(event: StorageEvent) {
    if (event.key === "aps-theme" && (event.newValue === "light" || event.newValue === "dark")) {
      document.documentElement.dataset.theme = event.newValue;
      callback();
    }
  }
  window.addEventListener("aps-theme-change", callback);
  window.addEventListener("storage", syncStorage);
  return () => { window.removeEventListener("aps-theme-change", callback); window.removeEventListener("storage", syncStorage); };
}
function currentTheme() { return document.documentElement.dataset.theme === "dark" ? "dark" : "light"; }
function serverTheme() { return "light"; }

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const theme = useSyncExternalStore(subscribeTheme, currentTheme, serverTheme);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("aps-theme", next); } catch { /* The selection works for this page even if storage is unavailable. */ }
    window.dispatchEvent(new Event("aps-theme-change"));
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function renderLinks() {
    return links.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>);
  }

  return (
    <header className="aps-site-header">
      <div className="aps-header-inner">
        <Link className="aps-brand" href="/" aria-label="American Property Solutions home" onClick={() => setOpen(false)}>
          {logoAsset.src && <span className="aps-brand-image"><Image src={logoAsset.src} alt="" fill sizes="48px" /></span>}
          <span><strong>American Property<br />Solutions</strong><small>Commercial exterior maintenance</small></span>
        </Link>
        <nav className="aps-desktop-nav" aria-label="Primary navigation">{renderLinks()}</nav>
        <div className="aps-header-actions">
          <a className="aps-header-phone" href={business.phoneHref}><span className="aps-phone-desktop">{business.phone}</span><span className="aps-phone-mobile">Call APS</span></a>
          <button type="button" className="aps-theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}><span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span></button>
          <Link className="aps-header-cta" href="/contact">Request a walkthrough <span aria-hidden="true">↗</span></Link>
          <button ref={menuButton} type="button" className="aps-menu-toggle" aria-expanded={open} aria-controls="aps-mobile-navigation" onClick={() => setOpen(!open)}><span>{open ? "Close" : "Menu"}</span><span className={open ? "aps-menu-icon is-open" : "aps-menu-icon"} aria-hidden="true"><i /><i /></span></button>
        </div>
      </div>
      <nav id="aps-mobile-navigation" className="aps-mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}>Home</Link>
        {renderLinks()}
        <Link className="aps-mobile-walkthrough" href="/contact" onClick={() => setOpen(false)}>Request a property walkthrough <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
