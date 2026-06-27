/* RTEF 2026 — nav, sticky header, scroll reveals (a11y-guarded), contact form */
(function () {
  "use strict";

  /* ----- Auto-update copyright year ----- */
  var yr = String(new Date().getFullYear());
  document.querySelectorAll(".year").forEach(function (el) { el.textContent = yr; });

  /* ----- Mobile nav ----- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && window.innerWidth <= 920) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Sticky header shadow on scroll ----- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----- Scroll reveals (progressive enhancement) ----- */
  var reveals = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reveals.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* ----- Contact form: compose email + confirm ----- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (n) { return (form.elements[n] && form.elements[n].value || "").trim(); };
      var name = v("name"), email = v("email"), subject = v("subject"), message = v("message");
      var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
      window.location.href = "mailto:RTEFInc@gmail.com?subject=" +
        encodeURIComponent(subject || ("Website inquiry from " + name)) +
        "&body=" + encodeURIComponent(body);
      var c = document.getElementById("form-confirm");
      if (c) { c.classList.add("show"); c.scrollIntoView({ behavior: "smooth", block: "center" }); }
      form.reset();
    });
  }
})();
