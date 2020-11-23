// -------Animations-------- ["$", "€", "£", "₽", "₪", "¥", "₹", "₩", "฿"];

let currencyElems = document.querySelectorAll(".icon_elem");
let button = document.querySelector("#swap");

button.addEventListener("click", () => {
  Array.from(currencyElems).forEach((el) => {
    let windowWth = window.innerWidth;
    let windowHth = window.innerHeight;

    el.style.marginLeft = Math.floor(Math.random() * windowWth) + "px";
    el.style.marginTop = Math.floor(Math.random() * windowHth) + "px";

    console.log(windowWth);
    console.log(windowHth);
  });
});
