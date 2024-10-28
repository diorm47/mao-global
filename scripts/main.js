function menuToggler() {
  const menu = document.querySelector(".nav_mobile");
  menu.classList.toggle("mob_menu_wrapper_visible");
}

// Находим элементы
const langToggler = document.querySelector('.lang_toggler');
const langModal = document.querySelector('.lang_toggler_modal');
const langItems = document.querySelectorAll('.lang_toggler_modal_item'); // Все элементы выбора языка

// Обработчик клика для открытия/закрытия модалки и добавления класса активности
langToggler.addEventListener('click', (event) => {
  event.stopPropagation();
  langToggler.classList.toggle('active_lang');
});

// Закрытие модалки при клике вне её области
document.addEventListener('click', (event) => {
  if (!langToggler.contains(event.target)) {
    langToggler.classList.remove('active_lang');
  }
});

// Обработчик для выбора элемента языка
langItems.forEach(item => {
  item.addEventListener('click', () => {
    // Удаляем класс 'active' со всех элементов, чтобы только один был активен
    langItems.forEach(i => i.classList.remove('lang_toggler_modal_item_active'));
    item.classList.add('lang_toggler_modal_item_active'); // Добавляем класс активного элемента

    // Обновляем флаг и текст в lang_toggler
    const selectedFlag = item.querySelector('img').src;
    const selectedText = item.querySelector('p').textContent;
    langToggler.querySelector('img').src = selectedFlag;
    langToggler.querySelector('p').textContent = selectedText;

    // Закрываем модалку
    langToggler.classList.remove('active_lang');
  });
});



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



