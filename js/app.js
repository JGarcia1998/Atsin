document
  .querySelector(".sidebar__label")
  .addEventListener("click", function () {
    if (document.querySelector(".sidebar__input").checked) {
      document.querySelector(".sidebar").style.width = 0;
      document.querySelector(".sidebar__label").style.top = "5rem";
      document.querySelector(".sidebar__label").style.left = "-8rem";
    } else {
      document.querySelector(".sidebar").style.width = "25vw";
      document.querySelector(".sidebar__label").style.top = "50%";
      document.querySelector(".sidebar__label").style.left = "-2.5rem";
    }
  });

document.querySelectorAll(".main-container__checkbox").forEach((item) => {
  item.addEventListener("click", function () {
    if (item.checked && item.getAttribute("value") == "first") {
      document.querySelector(
        ".main-container"
      ).style.backgroundImage = `linear-gradient(
            to right top,
            rgba(2, 2, 2, 0.8),
            rgba(2, 2, 2, 0.2)
          ),url(../img/main3.jpg)`;
      document.querySelector(".main-container__hook").textContent =
        "Exploring the unknown requires tolerating uncertainty.";
    }
    if (item.checked && item.getAttribute("value") == "second") {
      document.querySelector(
        ".main-container"
      ).style.backgroundImage = `linear-gradient(
            to right top,
            rgba(2, 2, 2, 0.8),
            rgba(2, 2, 2, 0.2)
          ),url(../img/main.jpg)`;
      document.querySelector(".main-container__hook").textContent =
        "Taking new adventures in unknown territory";
    }
    if (item.checked && item.getAttribute("value") == "third") {
      document.querySelector(
        ".main-container"
      ).style.backgroundImage = `linear-gradient(
            to right top,
            rgba(2, 2, 2, 0.8),
            rgba(2, 2, 2, 0.2)
          ),url(../img/main2.jpg)`;
    }
  });
});
