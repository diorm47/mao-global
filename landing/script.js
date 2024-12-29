document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector(".company_select");
    const selectNot = document.querySelector(".company_select_not");
    const selectList = document.querySelector(".company_select_list");
    const companyItems = document.querySelectorAll(".company_item");
  
    // Открытие/закрытие выпадающего списка
    selectNot.addEventListener("click", () => {
      selectList.classList.toggle("visible_company_select_list");
    });
  
    // Замена текста и закрытие списка
    companyItems.forEach(item => {
      item.addEventListener("click", () => {
        const selectedCompany = item.innerHTML; // Берем содержимое элемента
        selectNot.innerHTML = selectedCompany;  // Заменяем содержимое .company_select_not
        selectList.classList.remove("visible_company_select_list"); // Закрываем список
        document.querySelector('.landing_header').classList.add("visible_landing_header")
        document.querySelector('.fedex_results').classList.add("visible_fedex_results")
      });
    });
  
    // Закрытие списка при клике вне
    document.addEventListener("click", (e) => {
      if (!select.contains(e.target)) {
        selectList.classList.remove("visible_company_select_list");
      }
    });
  });
  