var plusBtn = document.getElementById("plusInput");
var minusBtn = document.getElementById("minusInput");
var input = document.getElementById("son");
var jamiSum = document.getElementById("jami_sum");

var narx = 15000; // Coca Cola ning narxi (o'zgartirib yurishingiz mumkin)

plusBtn.addEventListener("click", function() {
  input.value = parseInt(input.value) + 1;
  jamiSum.textContent = parseInt(input.value) * narx;
});

minusBtn.addEventListener("click", function() {
  if (input.value > 0) {
    input.value = parseInt(input.value) - 1;
    jamiSum.textContent = parseInt(input.value) * narx;
  }
});

input.addEventListener("input", function() {
  if (input.value < 0) {
    input.value = 0; // Manfiy sonni qabul qilmaslik uchun
  }
  jamiSum.textContent = parseInt(input.value) * narx;  
});