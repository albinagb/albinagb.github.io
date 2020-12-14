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
          { transform: "translate(0,0)" },
          { transform: "translate(" + to.x + "rem," + to.y + "rem)" },
        ],
        {
          duration: (Math.random() + 1) * 1000,
          direction: "alternate",
          fill: "both",
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


