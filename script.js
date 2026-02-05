  
//   slider js slider js slider js slider js
  
  
  document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  let translateX = 0;

  function getValues() {
    const cardWidth = slider.children[0].offsetWidth + 24; // gap
    const totalWidth = slider.scrollWidth;
    const visibleWidth = slider.parentElement.offsetWidth;
    const maxTranslate = totalWidth - visibleWidth;

    return { cardWidth, maxTranslate };
  }

  next.addEventListener("click", () => {
    const { cardWidth, maxTranslate } = getValues();

    if (translateX >= maxTranslate) return; // 🚫 STOP — no blank space

    translateX += cardWidth;
    translateX = Math.min(translateX, maxTranslate);

    slider.style.transform = `translateX(-${translateX}px)`;
  });

  prev.addEventListener("click", () => {
    const { cardWidth } = getValues();

    if (translateX <= 0) return;

    translateX -= cardWidth;
    translateX = Math.max(translateX, 0);

    slider.style.transform = `translateX(-${translateX}px)`;
  });
});