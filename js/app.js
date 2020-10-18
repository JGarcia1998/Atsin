document
  .querySelector(".sidebar__label")
  .addEventListener("click", function () {
    if (document.querySelector(".sidebar__input").checked) {
      document.querySelector(".sidebar").style.width = 0;
    } else {
      document.querySelector(".sidebar").style.width = "25vw";
    }
  });
