let zz1 = true;
let zz2 = true;
let zz3 = true;
let zz4 = true;
let zz5 = true;
let zz6 = true;
let zz7 = true;
let zz8 = true;
let zz9 = false;

function setImage(imgId, condition, imgTrue, imgFalse) {
  const img = document.getElementById(imgId);
  if (condition) {
    img.src = imgTrue;
  } else {
    img.src = imgFalse;
  }
}

document.getElementById("img1").addEventListener("click", () => {
  zz1 = !zz1;
  zz2 = !zz2;
  zz4 = !zz4;
  setImage("img1", zz1, "img/no.jpg", "img/yes.jpg");
  setImage("img2", zz2, "img/no.jpg", "img/yes.jpg");
  setImage("img4", zz4, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

document.getElementById("img2").addEventListener("click", () => {
  zz2 = !zz2;
  zz1 = !zz1;
  zz3 = !zz3;
  zz5 = !zz5;
  setImage("img2", zz2, "img/no.jpg", "img/yes.jpg");
  setImage("img1", zz1, "img/no.jpg", "img/yes.jpg");
  setImage("img3", zz3, "img/no.jpg", "img/yes.jpg");
  setImage("img5", zz5, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

document.getElementById("img3").addEventListener("click", () => {
  zz3 = !zz3;
  zz2 = !zz2;
  zz6 = !zz6;
  setImage("img3", zz3, "img/no.jpg", "img/yes.jpg");
  setImage("img2", zz2, "img/no.jpg", "img/yes.jpg");
  setImage("img6", zz6, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

document.getElementById("img4").addEventListener("click", () => {
  zz4 = !zz4;
  zz1 = !zz1;
  zz5 = !zz5;
  zz7 = !zz7;
  setImage("img4", zz4, "img/no.jpg", "img/yes.jpg");
  setImage("img1", zz1, "img/no.jpg", "img/yes.jpg");
  setImage("img5", zz5, "img/no.jpg", "img/yes.jpg");
  setImage("img7", zz7, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

document.getElementById("img5").addEventListener("click", () => {
  zz5 = !zz5;
  zz2 = !zz2;
  zz6 = !zz6;
  zz8 = !zz8;
  zz4 = !zz4;
  setImage("img5", zz5, "img/no.jpg", "img/yes.jpg");
  setImage("img2", zz2, "img/no.jpg", "img/yes.jpg");
  setImage("img6", zz6, "img/no.jpg", "img/yes.jpg");
  setImage("img8", zz8, "img/no.jpg", "img/yes.jpg");
  setImage("img4", zz4, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

document.getElementById("img6").addEventListener("click", () => {
  zz6 = !zz6;
  zz3 = !zz3;
  zz5 = !zz5;
  zz9 = !zz9;
  setImage("img6", zz6, "img/no.jpg", "img/yes.jpg");
  setImage("img3", zz3, "img/no.jpg", "img/yes.jpg");
  setImage("img5", zz5, "img/no.jpg", "img/yes.jpg");
  setImage("img9", zz9, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

document.getElementById("img7").addEventListener("click", () => {
  zz7 = !zz7;
  zz4 = !zz4;
  zz8 = !zz8;
  setImage("img7", zz7, "img/no.jpg", "img/yes.jpg");
  setImage("img4", zz4, "img/no.jpg", "img/yes.jpg");
  setImage("img8", zz8, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

document.getElementById("img8").addEventListener("click", () => {
  zz8 = !zz8;
  zz5 = !zz5;
  zz7 = !zz7;
  zz9 = !zz9;
  setImage("img8", zz8, "img/no.jpg", "img/yes.jpg");
  setImage("img5", zz5, "img/no.jpg", "img/yes.jpg");
  setImage("img7", zz7, "img/no.jpg", "img/yes.jpg");
  setImage("img9", zz9, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

document.getElementById("img9").addEventListener("click", () => {
  zz9 = !zz9;
  zz8 = !zz8;
  zz6 = !zz6;
  setImage("img9", zz9, "img/no.jpg", "img/yes.jpg");
  setImage("img8", zz8, "img/no.jpg", "img/yes.jpg");
  setImage("img6", zz6, "img/no.jpg", "img/yes.jpg");
  updateImage();
});

setImage("img1", zz1, "img/no.jpg", "img/yes.jpg");
setImage("img2", zz2, "img/no.jpg", "img/yes.jpg");
setImage("img3", zz3, "img/no.jpg", "img/yes.jpg");
setImage("img4", zz4, "img/no.jpg", "img/yes.jpg");
setImage("img5", zz5, "img/no.jpg", "img/yes.jpg");
setImage("img6", zz6, "img/no.jpg", "img/yes.jpg");
setImage("img7", zz7, "img/no.jpg", "img/yes.jpg");
setImage("img8", zz8, "img/no.jpg", "img/yes.jpg");
setImage("img9", zz9, "img/no.jpg", "img/yes.jpg");
