// navbar navbar navbar navbar 



document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("toggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const logoText = document.getElementById("logoText");

  toggleBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
      toggleBtn.textContent = "☰";
      logoText.textContent = "Meet";
    } else {
      toggleBtn.textContent = "✕";
      logoText.textContent = "Meet *";
    }

  });

});
