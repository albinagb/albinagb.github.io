let element = document.querySelector(".coldBckgDiv");
let sunElems = document.querySelectorAll(".sunLight");
let triangleElems = document.querySelectorAll(".triangleOvals");
let earthElems = document.querySelectorAll(".rectEarth");
let strokeElems = document.querySelectorAll(".strokes");
let dropElem = document.querySelector(".drop");

// Save to the Local Stirage

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "warm-theme") {
    switchTheme.checked = true;
  }
}

// Transitions Only After Page Loaded
let bodyEl = document.body;

window.addEventListener("DOMContentLoaded", (event) => {
  bodyEl.classList.add("afterload");
});

// Local Storage

const btn = document.querySelector(".btn-toggle");

function switchTheme(e) {
  console.log(element.classList);

  if (element.classList == "coldBckgDiv") {
    document.documentElement.setAttribute("data-theme", "warm-theme");
    localStorage.setItem("theme", "warm-theme");
    console.log("warm theme");

    sunElems.forEach((e) => {
      e.classList.add("warmSun");
    });

    earthElems.forEach((e) => {
      e.classList.add("rectangleBckg");
    });

    triangleElems.forEach((e) => {
      e.classList.add("triangleBckg");
    });

    strokeElems.forEach((e) => {
      e.classList.add("strokesColor");
    });

    element.classList.add("warmBckgDiv");

    dropElem.classList.add("dropNew");
  } else {
    document.documentElement.setAttribute("data-theme", "cold-theme");

    localStorage.setItem("theme", "cold-theme");
    console.log("cold theme");

    sunElems.forEach((e) => {
      e.classList.remove("warmSun");
    });

    earthElems.forEach((e) => {
      e.classList.remove("rectangleBckg");
    });

    triangleElems.forEach((e) => {
      e.classList.remove("triangleBckg");
    });

    strokeElems.forEach((e) => {
      e.classList.remove("strokesColor");
    });

    element.classList.remove("warmBckgDiv");

    dropElem.classList.remove("dropNew");
  }
}

btn.addEventListener("click", switchTheme, false);
