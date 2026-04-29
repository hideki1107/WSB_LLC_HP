(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  var body = document.body;

  function updateHeaderVisibility() {
    if (window.scrollY <= 0) {
      header.classList.remove("is-hidden");
      body.classList.remove("header-is-hidden");
      return;
    }

    header.classList.add("is-hidden");
    body.classList.add("header-is-hidden");
  }

  updateHeaderVisibility();
  window.addEventListener("scroll", updateHeaderVisibility, { passive: true });
})();
