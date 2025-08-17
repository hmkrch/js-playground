// Variabel yang berisi nilai input

const celciusValue = document.getElementById("celciusInpt");
const fahrenheitValue = document.getElementById("fahrenheitInpt");

// variabel button "Cek Hasil"

const hasilBtn = document.getElementById("cekHasilBtn");

// Variabel yang beirsi Menampilkan hasil

const tampilkanHasil = document.getElementById("tampilkanHasil");

const pilihSuhu = document.getElementById("pilihSuhu");

const kolomSuhuF = document.getElementById("kolomF");
const kolomSuhuC = document.getElementById("kolomC");

pilihSuhu.onchange = () => {
  if (pilihSuhu.value === "fahrenheit") {
    kolomSuhuF.classList.remove("hide");
    kolomSuhuC.classList.add("hide");
  } else {
    kolomSuhuF.classList.add("hide");
    kolomSuhuC.classList.remove("hide");
  }
};

// Function

const konversiSuhuCelcius = () => {
  const c = Number(celciusValue.value);

  return (c * 9) / 5 + 32;
};

const konversiSuhuFahrenheit = () => {
  const f = Number(fahrenheitValue.value);
  const hasil = ((f - 32) * 5) / 9;

  return hasil.toFixed(1);
};

// console.log(konversiSuhuFahrenheit());

// 2 versi

hasilBtn.onclick = () => {
  if (!kolomSuhuC.classList.contains("hide")) {
    tampilkanHasil.textContent = `${konversiSuhuCelcius()} °F`;
  } else {
    tampilkanHasil.textContent = `${konversiSuhuFahrenheit()} °C`;
  }
};

// versi tanpa button

// celciusValue.onkeyup = () => {
//   tampilkanHasil.textContent = konversiSuhu();
// };

// Display

const mulaiBtn = document.getElementById("mulaiBtn");
const displayContent = document.getElementById("displayTwo");
const DisplayIntro = document.querySelector(".intro");
const bodyColor = document.querySelector("body");

const title = document.querySelector(".title");

// Testing
console.log(title);
// function

mulaiBtn.onclick = () => {
  displayContent.classList.remove("hide");
  DisplayIntro.classList.add("hide");
  title.classList.remove("hide");
  bodyColor.style.backgroundColor = "white";
};
