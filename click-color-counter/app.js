// Variable

const colorsBtn = document.querySelectorAll(".colors-btn");
const hapusBtn = document.getElementById("hapusBtn");

let tiapDiKlik = { red: 0, green: 0, blue: 0 };

colorsBtn.forEach((colorBtn) => {
  colorBtn.style.fontSize = "40px";
  colorBtn.style.fontWeight = "bold";

  colorBtn.onclick = () => {
    let hasil = (tiapDiKlik[colorBtn.value] += 1);
    if (hasil <= 10) {
      colorBtn.textContent = hasil;
    } else {
      colorBtn.textContent = "MAX";
    }
  };
});

const hapusSemua = () => {
  tiapDiKlik.red = 0;
  tiapDiKlik.green = 0;
  tiapDiKlik.blue = 0;

  colorsBtn.forEach((colorBtn) => {
    colorBtn.textContent = "";
  });
};

hapusBtn.onclick = () => hapusSemua();
