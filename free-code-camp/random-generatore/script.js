const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

const btn = document.getElementById("btn");
const body = document.body;
btn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * darkColorsArr.length);
  body.style.backgroundColor = darkColorsArr[randomIndex];
});
