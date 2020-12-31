let currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
let currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

let exchEl = document.querySelector(".ex-ch");

let arr = [];

// summer theme mode

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  console.log("hello Mir");
  var element = document.body;
  element.classList.toggle("summer-theme");
});

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

      // currencyEl_two.value = arr[16];
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
