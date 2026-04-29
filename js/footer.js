(function () {
  var body = document.body;
  var footer = document.querySelector(".site-footer");
  if (!footer) return;

  function updateFooterVisibility() {
    var scrollY = window.scrollY || window.pageYOffset;
    var viewportBottom = scrollY + window.innerHeight;
    var docHeight = document.documentElement.scrollHeight;
    var isAtBottom = viewportBottom >= docHeight - 2;

    if (isAtBottom) {
      body.classList.add("footer-is-visible");
      return;
    }

    body.classList.remove("footer-is-visible");
  }

  updateFooterVisibility();
  window.addEventListener("scroll", updateFooterVisibility, { passive: true });
  window.addEventListener("resize", updateFooterVisibility);
})();
