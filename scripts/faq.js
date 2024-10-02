document.querySelectorAll(".faq_item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("faq_item_active");

    document.querySelectorAll(".faq_item").forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("faq_item_active");
      }
    });
  });
});

const tabs = document.querySelector(".tabs_list");
const tabButton = document.querySelectorAll(".menu_item");
const contents = document.querySelectorAll(".menu_item_content");

if (tabs) {
  tabs.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("menu_item")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      tabButton.forEach((btn) => {
        btn.classList.remove("active_menu");
      });
      target.classList.add("active_menu");

      contents.forEach((content) => {
        content.classList.remove("active_menu");
      });
      const element = document.getElementById(id);
      element.classList.add("active_menu");
    }
  };
}
