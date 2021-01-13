//
//

// Transitions Only After Page Load
let bodyEl = document.body;

window.addEventListener("DOMContentLoaded", (event) => {
  bodyEl.classList.add("afterload");
});

//
// summer theme mode code (need to add local storage to keep the theme)

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", () => {
  let element = document.body;
  let sunElems = document.querySelectorAll(".sunLight");
  let triangleElems = document.querySelectorAll(".triangleOvals");
  let earthElems = document.querySelectorAll(".rectEarth");
  let strokeElems = document.querySelectorAll(".strokes");

  element.classList.toggle("warmBckg");

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
});
