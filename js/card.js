// 1-qism
const mName = document.querySelector("#mName");
const mNarxi = document.querySelector("#mNarxi");
const mimg = document.querySelector("#mimg");
const izoh = document.querySelector("#izoh");
const btn1 = document.querySelector("#btn1");
// 2-qism
const mahsulotNomi = document.querySelector("#mahsulotNomi");
const mahsulotNarxi = document.querySelector("#mahsulotNarxi");
const mahsulot_soni = document.querySelector("#mahsulot_soni");
const jamiSum = document.querySelector("#jamiSum");
const mahsulotqoshish = document.querySelector("#mahsulotqoshish");
const mahsulotayirish = document.querySelector("#mahsulotayirish");
const card = document.querySelector(".card1");
const btn2 = document.querySelector("#btn2");

// 1qism btn1 bosilganda
btn1.addEventListener("click", () => {
  if (mName.value == "" || mNarxi.value == "" || izoh.value == "") {
    alert("Barcha malumotlarni kiriting");
  } else {
    mahsulotNomi.innerHTML = mName.value;
    mahsulotNarxi.innerHTML = mNarxi.value;
    mahsulot_soni.innerHTML = 1;
    card.style.display = "block";
  }
});

// 2qism mahsulotqoshish bosilganda

mahsulotqoshish.addEventListener("click", () => {
  mahsulot_soni.value = Number(mahsulot_soni.value) + 1;
  jamiSum.innerHTML =
    Number(mahsulotNarxi.innerHTML) * Number(mahsulot_soni.value);
});
mahsulotayirish.addEventListener("click", () => {
  if (mahsulot_soni.value > 0) {
    mahsulot_soni.value = Number(mahsulot_soni.value) - 1;
    jamiSum.innerHTML =
      Number(mahsulotNarxi.innerHTML) * Number(mahsulot_soni.value);
  }
});
btn2.addEventListener("click", () => {
  alert(
    "Mahsulot nomi: " +
      mahsulotNomi.innerHTML +
      "\nMahsulot narxi: " +
      mahsulotNarxi.innerHTML +
      "\nMahsulot soni: " +
      mahsulot_soni.value +
      "\nJami summa: " +
      jamiSum.innerHTML
  );
});
