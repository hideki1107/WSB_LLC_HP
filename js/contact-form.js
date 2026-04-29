(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var btn = form.querySelector(".btn-submit");
    var result = document.getElementById("form-result");
    btn.disabled = true;
    btn.textContent = "送信中…";
    result.innerHTML = "";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form)
    })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.success) {
          result.innerHTML = '<p class="form-msg form-msg--ok">お問い合わせを受け付けました。<br>担当者よりご返信いたします。</p>';
          form.reset();
        } else {
          result.innerHTML = '<p class="form-msg form-msg--err">送信に失敗しました。時間をおいて再度お試しください。</p>';
        }
        btn.disabled = false;
        btn.textContent = "送信する";
      })
      .catch(function () {
        result.innerHTML = '<p class="form-msg form-msg--err">送信に失敗しました。時間をおいて再度お試しください。</p>';
        btn.disabled = false;
        btn.textContent = "送信する";
      });
  });
})();
