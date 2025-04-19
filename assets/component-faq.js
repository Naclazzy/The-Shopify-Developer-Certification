document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".content-hub-faq button");

  function toggleFaq(item) {
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    const itemToggle = item.getAttribute("aria-expanded");


    if (itemToggle === "false") {
      item.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) =>
    item.addEventListener("click", () => toggleFaq(item))
  );
});
