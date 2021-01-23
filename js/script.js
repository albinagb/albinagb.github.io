//
//

// Transitions Only After Page Loaded
let bodyEl = document.body;

window.addEventListener("DOMContentLoaded", (event) => {
  bodyEl.classList.add("afterload");
});

//
// summer theme mode code (need to add local storage to keep the theme)

const btn = document.querySelector(".btn-toggle");

// let animate =  { background: ["#009900", "#ff0000"] },

btn.addEventListener("click", () => {
  let element = document.querySelector(".coldBckgDiv");
  let sunElems = document.querySelectorAll(".sunLight");
  let triangleElems = document.querySelectorAll(".triangleOvals");
  let earthElems = document.querySelectorAll(".rectEarth");
  let strokeElems = document.querySelectorAll(".strokes");
  let dropElem = document.querySelector(".drop");

  sunElems.forEach((e) => {
    e.classList.toggle("warmSun");
  });

  earthElems.forEach((e) => {
    e.classList.toggle("rectangleBckg");
  });

  triangleElems.forEach((e) => {
    e.classList.toggle("triangleBckg");
  });

  strokeElems.forEach((e) => {
    e.classList.toggle("strokesColor");
  });

  element.classList.toggle("warmBckgDiv");

  dropElem.classList.toggle("dropNew");
});
