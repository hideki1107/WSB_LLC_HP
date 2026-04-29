(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var button = header.querySelector(".menu-toggle");
  var nav = header.querySelector(".nav--header");
  if (!button || !nav) return;

  function closeMenu() {
    header.classList.remove("is-menu-open");
    button.setAttribute("aria-expanded", "false");
  }

  button.addEventListener("click", function () {
    var isOpen = header.classList.toggle("is-menu-open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
})();
