
  const openBtn = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", function() {
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  });

  closeBtn.addEventListener("click", function() {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });

  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  });


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


// Start project pop up


