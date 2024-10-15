const paymentItems = document.querySelectorAll(".payments_item");

paymentItems.forEach((item) => {
  item.querySelector("input").addEventListener("change", function () {
    // Удалить класс активности у всех элементов
    paymentItems.forEach((el) => el.classList.remove("active_payments_item"));

    // Добавить класс активности к выбранному элементу
    if (this.checked) {
      item.classList.add("active_payments_item");
    }
  });
});

const planItems = document.querySelectorAll(".plan_item");

planItems.forEach((item) => {
  item.querySelector("input").addEventListener("change", function () {
    // Удалить класс активности у всех элементов
    planItems.forEach((el) => el.classList.remove("active_plan_item"));

    // Добавить класс активности к выбранному элементу
    if (this.checked) {
      item.classList.add("active_plan_item");
    }
  });
});
