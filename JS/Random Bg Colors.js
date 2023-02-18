// const quote = document.getElementById("colorful-quote");
//   quote.addEventListener("mousemove", function() {
//     const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     quote.style.color = randomColor;
//   });

const background = document.getElementById("Random-Bg-Color");

const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.color = randomColor;
};

setBackgroundColor();

setInterval(() => {
  setBackgroundColor();
}, 3000);
