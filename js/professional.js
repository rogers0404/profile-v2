(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var nav = document.querySelector("[data-nav]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var carouselTrack = document.querySelector("[data-carousel-track]");
  var carouselPrev = document.querySelector("[data-carousel-prev]");
  var carouselNext = document.querySelector("[data-carousel-next]");
  var carouselTimer;
  var carouselRestartTimer;
  var year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function syncHeaderState() {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName !== "A") {
        return;
      }

      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  function scrollProjects(direction) {
    if (!carouselTrack) {
      return;
    }

    var card = carouselTrack.querySelector(".work-card");
    var gap = 18;
    var distance = card ? card.getBoundingClientRect().width + gap : carouselTrack.clientWidth;

    carouselTrack.scrollBy({
      left: direction * distance,
      behavior: "smooth"
    });
  }

  function startCarouselAutoplay() {
    if (!carouselTrack || document.hidden) {
      return;
    }

    window.clearInterval(carouselTimer);
    carouselTimer = window.setInterval(function () {
      var maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
      var isAtEnd = carouselTrack.scrollLeft >= maxScroll - 4;

      if (isAtEnd) {
        carouselTrack.scrollTo({
          left: 0,
          behavior: "smooth"
        });
        return;
      }

      scrollProjects(1);
    }, 4500);
  }

  function stopCarouselAutoplay() {
    window.clearInterval(carouselTimer);
    window.clearTimeout(carouselRestartTimer);
  }

  function restartCarouselAutoplay() {
    stopCarouselAutoplay();
    carouselRestartTimer = window.setTimeout(startCarouselAutoplay, 7000);
  }

  if (carouselPrev && carouselNext) {
    carouselPrev.addEventListener("click", function () {
      scrollProjects(-1);
      restartCarouselAutoplay();
    });

    carouselNext.addEventListener("click", function () {
      scrollProjects(1);
      restartCarouselAutoplay();
    });
  }

  if (carouselTrack) {
    carouselTrack.addEventListener("mouseenter", stopCarouselAutoplay);
    carouselTrack.addEventListener("mouseleave", startCarouselAutoplay);
    carouselTrack.addEventListener("pointerdown", restartCarouselAutoplay);
    carouselTrack.addEventListener("focusout", startCarouselAutoplay);
    carouselTrack.addEventListener("focusin", restartCarouselAutoplay);
    startCarouselAutoplay();
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopCarouselAutoplay();
      return;
    }

    startCarouselAutoplay();
  });

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}());
