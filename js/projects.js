// -------Animations-------- ["$", "€", "£", "₽", "₪", "¥", "₹", "₩", "฿"];

let currencyElems = document.querySelectorAll(".icon_elem");
let button = document.querySelector("#swap");
let mainWidth = document.querySelector(".main").offsetWidth;
let mainHeight = document.querySelector(".main").offsetHeight;

// console.log(mainWidth, mainHeight);

button.addEventListener("click", () => {
  let collision = true;

  let attempts = 0;
  while (collision) {
    attempts++;
    let pointsArr = [];
    let itemWidth;
    Array.from(currencyElems).forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 5,
      };

      el.animate(
        [
          // { transform: "translate(" + to.x + "rem," + to.y + "rem)" },
          { transform: "translate(" + to.x + "rem," + to.y + "rem)" },
        ],
        {
          duration: (Math.random() + 1) * 1000,
          direction: "alternate",
          fill: "forwards",
          iterations: 1,
          easing: "ease-in-out",
        }
      );

      let rect = el.getBoundingClientRect();
      let w = rect.bottom - rect.top;
      let x = rect.left + w / 2;
      let y = rect.top + w / 2;

      itemWidth = w;

      pointsArr.push([x, y]);
    });

    // Points Array => ForEach

    let a = pointsArr[0][0] - pointsArr[1][0];
    let b = pointsArr[0][1] - pointsArr[1][1];
    let distance = Math.sqrt(a * a + b * b);

    if (distance > itemWidth * 1.05) {
      collision = false;
      // console.log(distance, distance > itemWidth * 1.1, attempts);
    }
  }
});

// Collision code

let currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
let currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

let exchEl = document.querySelector(".ex-ch");

let arr = [];

// Create selections

function makeSelections(selections_arr, currency_el) {
  selections_arr.forEach((el) => {
    const option = document.createElement("option");
    option.value = el;
    option.innerText = el;
    currency_el.appendChild(option);
  });
}

// Calculate func: 1. Fetch currency rates into an array 2. Calculate the rates

function calculate() {
  let currency_one;
  let currency_two;

  fetch("https://open.exchangerate-api.com/v6/latest", {})
    .then((res) => res.json())
    .then((data) => {
      arr = Object.keys(data.rates);

      makeSelections(arr, currencyEl_one);
      makeSelections(arr, currencyEl_two);

      currency_one = currencyEl_one.value;
      currency_two = currencyEl_two.value;

      return fetch(
        `https://api.exchangerate-api.com/v4/latest/${currency_one}`
      );
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(Object.entries(data.rates));
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      amountEl_one.value = parseFloat(amountEl_one.value);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Event listeners

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;

  exchEl.classList.toggle("rotate");
  calculate();
});

calculate();

// Time function
function clock() {
  let clockEl = document.querySelector("#time");

  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  let today = new Date();
  clockEl.textContent = today.toLocaleDateString("en-US", options);
}

setInterval(clock, 1000);
