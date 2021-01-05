// summer theme mode

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  let element = document.body;
  let sunElems = document.querySelectorAll(".sunLight");
  let triangleElems = document.querySelectorAll(".triangleOvals");
  let earthElems = document.querySelectorAll(".rectEarth");

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
});
