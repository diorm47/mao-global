function menuToggler() {
  const menu = document.querySelector(".nav_mobile");
  menu.classList.toggle("mob_menu_wrapper_visible");
}

const decButton = document.querySelector(".dec");
const incButton = document.querySelector(".inc");
const depositValue = document.querySelector(".deposit_inc_value");

let currentWidth = 45; // Начальная ширина в процентах

const updateWidth = (newWidth) => {
  if (newWidth < 0) {
    newWidth = 0;
  } else if (newWidth > 100) {
    newWidth = 100;
  }
  depositValue.style.width = `${newWidth}%`;
};

decButton.addEventListener("click", () => {
  currentWidth -= 5; // Уменьшение на 5%
  updateWidth(currentWidth);
});

incButton.addEventListener("click", () => {
  currentWidth += 5; // Увеличение на 5%
  updateWidth(currentWidth);
});
