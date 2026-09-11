// Reads/writes the visitor's analytics consent choice and updates Google
// Consent Mode and Microsoft Clarity Consent API V2. Visitors who do not
// consent remain in cookieless, denied analytics mode.
(function () {
  "use strict";
  var STORAGE_KEY = "mc-consent-choice";

  function updateClarityConsent(analyticsGranted) {
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    window.clarity("consentv2", {
      ad_Storage: "denied",
      analytics_Storage: analyticsGranted ? "granted" : "denied"
    });
  }

  function updateConsent(analyticsGranted) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag("consent", "update", {
      analytics_storage: analyticsGranted ? "granted" : "denied"
    });
    updateClarityConsent(analyticsGranted);
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  if (saved === "granted") {
    updateConsent(true);
    return;
  }

  if (saved === "denied") {
    updateConsent(false);
    return;
  }

  // Queue the denied state before Clarity loads. This preserves privacy by
  // default and ensures the first page view has an explicit consent signal.
  updateConsent(false);

  var el = document.getElementById("mc-consent");
  if (!el) return;
  var accept = el.querySelector("[data-consent-accept]");
  var decline = el.querySelector("[data-consent-decline]");
  if (!accept || !decline) return;

  function choose(choice, granted) {
    try { localStorage.setItem(STORAGE_KEY, choice); } catch (e) {}
    updateConsent(granted);
    el.hidden = true;
  }

  accept.addEventListener("click", function () {
    choose("granted", true);
  });
  decline.addEventListener("click", function () {
    choose("denied", false);
  });
  el.hidden = false;
})();
