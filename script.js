let currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
let currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

let clockEl = document.querySelector("#time");
let exchEl = document.querySelector(".fa-exchange-alt");

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

// Read fetched exchange rates and update the DOM

function calculate() {
  let currency_one;
  let currency_two;

  fetch("https://open.exchangerate-api.com/v6/latest", {})
    .then((res) => res.json())
    .then((data) => {
      arr = Object.keys(data.rates);
      console.log(Object.entries(data));

      makeSelections(arr, currencyEl_one);
      makeSelections(arr, currencyEl_two);

      currency_one = currencyEl_one.value;
      currency_two = currencyEl_two.value;

      // let inputValue = currencyEl_two.value;
      // inputValue = arr[16];
      // console.log(inputValue);

      return fetch(
        `https://api.exchangerate-api.com/v4/latest/${currency_one}`
      );
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(Object.entries(data.rates));
      const rate = data.rates[currency_two];
      // console.log(data.rates);

      rateEl.innerText = `1${currency_one} = ${rate} ${currency_two}`;
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

  // const tempAmount = amountEl_one.value;
  // amountEl_one.value = amountEl_two.value;
  // amountEl_two.value = tempAmount;
  exchEl.classList.toggle("rotate");
  calculate();
});

calculate();

// Time function
function clock() {
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

// ---------------------------------------------------------------

// async function getData() {
//   const response = await fetch("https://cat-fact.herokuapp.com");
//   const data = await response.text();
//   console.log("start");
//   console.log(data);
//   console.log("finish");
// }

// getData();
