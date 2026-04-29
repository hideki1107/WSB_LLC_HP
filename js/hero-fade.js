(function () {
  var hero = document.getElementById("company-hero");
  if (!hero) return;
  var main = hero.closest("main");

  function fitHeroToViewport() {
    if (!main) return;
    var mainRect = main.getBoundingClientRect();
    hero.style.left = String(-mainRect.left) + "px";
    hero.style.width = String(window.innerWidth) + "px";
  }

  function updateHeroOpacity() {
    var isMobile = window.innerWidth <= 900;
    if (isMobile) {
      hero.style.setProperty("--company-hero-opacity", "1");
      return;
    }
    var startOffset = 0;
    var fadeDistance = Math.max(window.innerHeight * 0.1, 48);
    var progress = Math.min(Math.max(window.scrollY - startOffset, 0) / fadeDistance, 1);
    hero.style.setProperty("--company-hero-opacity", String(1 - progress));
  }

  fitHeroToViewport();
  updateHeroOpacity();
  window.addEventListener("scroll", updateHeroOpacity, { passive: true });
  window.addEventListener("resize", function () {
    fitHeroToViewport();
    updateHeroOpacity();
  });
})();
