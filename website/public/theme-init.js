(function () {
  var theme;
  try { theme = localStorage.getItem("aps-theme"); } catch { /* Use the device preference. */ }
  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = theme;
})();
