let mahsulotNomi = document.querySelector("#mahsulotNomi");
let mahsulotNarxi = document.querySelector("#mahsulotNarxi");
let mahsulotSoni = document.querySelector("#son");
let mahsulotqoshish1 = document.querySelector("#mahsulotqoshish");
let mahsulotayirish = document.querySelector("#mahsulotayirish");
let tafsilot = document.querySelector("#tafsilot");
let jamiSum = document.querySelector("#jamiSum");
let narxi = document.querySelector("#narxi");
let nomi = document.querySelector("#nomi");
let btn2 = document.querySelector("#btn2");

mahsulotSoni.value = 0;

mahsulotqoshish1.addEventListener("click", () => {
  mahsulotSoni.value = parseInt(mahsulotSoni.value) + 1;
  jamiSum.textContent =
    parseInt(mahsulotNarxi.value) * parseInt(mahsulotSoni.value);
});

mahsulotayirish.addEventListener("click", () => {
  if (mahsulotSoni.value > 0) {
    mahsulotSoni.value = parseInt(mahsulotSoni.value) - 1;
    jamiSum.textContent =
      parseInt(mahsulotNarxi.value) * parseInt(mahsulotSoni.value);
  }
});

btn2.addEventListener("click", () => {
  mahsulotNomi.textContent = nomi.value;
  mahsulotNarxi.textContent = narxi.value;
  mahsulotNarxi = parseInt(narxi.value);
});
