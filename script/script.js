document.querySelectorAll(".faq__item").forEach(function (item) {
  item.addEventListener("click", function (e) {
    this.nextElementSibling.classList.toggle("close");
    this.querySelector("img").classList.toggle("rotate");
    const collection = this.parentElement.children;

    for (let key of collection) {
      key !== this ? key.nextElementSibling.classList.remove("close") : "";
    }
  });
});
