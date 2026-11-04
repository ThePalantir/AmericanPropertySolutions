"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __weatherwidget_init?: () => void;
  }
}

const WIDGET_SCRIPT_ID = "weatherwidget-io-js";
const WIDGET_SCRIPT_SRC = "https://weatherwidget.io/js/widget.min.js";

export function WeatherWidget() {
  useEffect(() => {
    function installWidget() {
      if (document.getElementById(WIDGET_SCRIPT_ID)) {
        window.__weatherwidget_init?.();
        return;
      }
      const script = document.createElement("script");
      script.id = WIDGET_SCRIPT_ID;
      script.src = WIDGET_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    let idleId: number | undefined;
    let timerId: number | undefined;
    function scheduleWidget() {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(installWidget, { timeout: 4000 });
      } else {
        timerId = window.setTimeout(installWidget, 1800);
      }
    }
    if (document.readyState === "complete") scheduleWidget();
    else window.addEventListener("load", scheduleWidget, { once: true });
    return () => {
      window.removeEventListener("load", scheduleWidget);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  return (
    <aside className="aps-weather-widget" aria-label="Current weather conditions for the Lehigh Valley">
      <p className="aps-weather-widget-label">
        <span>Local conditions</span>
        <small>Allentown, PA</small>
      </p>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/40d61n75d49/allentown/?unit=us"
        data-label_1="LEHIGH VALLEY"
        data-label_2="CONDITIONS"
        data-mode="Current"
        data-theme="dark"
        aria-label="View current Lehigh Valley weather conditions on Forecast7"
      >
        LEHIGH VALLEY CONDITIONS
      </a>
    </aside>
  );
}
