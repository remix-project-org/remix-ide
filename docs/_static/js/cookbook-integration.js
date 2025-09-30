(function () {
  // Wait for the RTD theme to finish wiring up
  function onReady(fn) {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      setTimeout(fn, 0);
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  onReady(function initAskCookbook() {
    // 1) Create a fixed, isolated host so the bot cannot resize the page
    let host = document.getElementById("__cookbook-host");
    if (!host) {
      host = document.createElement("div");
      host.id = "__cookbook-host";
      host.style.position = "fixed";
      host.style.inset = "auto 24px 24px auto"; // bottom-right button
      host.style.zIndex = "2147483647"; // above RTD nav
      host.style.pointerEvents = "none"; // host doesn’t catch events
      document.body.appendChild(host);
    }

    // Shadow DOM to keep any bot CSS contained
    const root = host.shadowRoot || host.attachShadow?.({ mode: "open" });
    let mount = root
      ? root.getElementById("__cookbook")
      : document.getElementById("__cookbook");
    if (!mount) {
      mount = document.createElement("div");
      mount.id = "__cookbook";
      mount.dataset.apiKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmE4MzQyZTg2NDM1ZGEyMGE1NDc5ODciLCJpYXQiOjE3MjIyOTk0MzgsImV4cCI6MjAzNzg3NTQzOH0.v-569WVNKHsQX2uDPyHJCOjXz811_iSlyitaKgqmg2U";

      // A style reset so the launcher button doesn’t inherit RTD styles
      const style = document.createElement("style");
      style.textContent = `
        :host { all: initial; }
        #__cookbook { all: initial; pointer-events: auto; }
      `;
      root ? root.appendChild(style) : document.head.appendChild(style);
      (root || document.body).appendChild(mount);
    }

    // 2) Load the vendor script only once
    if (!document.getElementById("__cookbook-script")) {
      const s = document.createElement("script");
      s.id = "__cookbook-script";
      s.src =
        "https://cdn.jsdelivr.net/npm/@cookbookdev/docsbot/dist/standalone/index.cjs.js";
      s.async = true;
      // ensure it can find #__cookbook inside Shadow DOM
      if (root) s.referrerPolicy = "no-referrer-when-downgrade";
      document.head.appendChild(s);
    }

    // 3) Prevent global key handling conflicts while modal is open
    const stop = (e) => e.stopPropagation();
    document.addEventListener("cookbook:modal:state:change", (e) => {
      const isOpen = e.detail?.isOpen;
      if (isOpen) {
        document.body.addEventListener("keydown", stop, { capture: true });
      } else {
        document.body.removeEventListener("keydown", stop, { capture: true });
      }
    });

    // 4) Belt & suspenders: if vendor injects anything outside our host, clamp it
    const mo = new MutationObserver(() => {
      const stray = Array.from(
        document.querySelectorAll('[id^="cookbook"], [class*="cookbook"]')
      ).filter((el) => !host.contains(el));
      stray.forEach((el) => {
        el.style.position = "fixed";
        el.style.zIndex = "2147483647";
      });
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  });
})();
