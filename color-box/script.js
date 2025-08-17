// Varibel Box

const boxRed = document.getElementById("red");
const boxYellow = document.getElementById("yellow");
const boxGreen = document.getElementById("green");

// variablae display

const displayButton = document.getElementById("displayButton");

// function

const tampilkanWarna = (warna) => {
  displayButton.innerHTML = `<marquee>${warna}</marquee>`;
  displayButton.style.background = warna;
  displayButton.style.textTransform = "uppercase";
  displayButton.style.padding = "10px";
  displayButton.style.color = "white";
  displayButton.style.fontWeight = "bold";
  displayButton.style.fontFamily = "sans-serif";
};

boxRed.onclick = () => tampilkanWarna("red");
boxYellow.onclick = () => tampilkanWarna("yellow");
boxGreen.onclick = () => tampilkanWarna("green");

// Testing
