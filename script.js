const convertir = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function encriptar(text) {
  let encriptar = "";
  for (let i = 0; i < text.length; i++) {
    let letra = text[i];
    if (convertir.hasOwnProperty(letra)) {
      encriptar += convertir[letra];
    } else {
      encriptar += letra;
    }
  }
  return encriptar;
}

function desencriptar(text) {
  let desencriptar = "";
  for (let i = 0; i < text.length; i++) {
    let letra = text[i];
    if (letra === "e" && text.slice(i, i + 5) === "enter") {
      desencriptar += "e";
      i += 4;
    } else if (letra === "i" && text.slice(i, i + 4) === "imes") {
      desencriptar += "i";
      i += 3;
    } else if (letra === "a" && text.slice(i, i + 2) === "ai") {
      desencriptar += "a";
      i += 1;
    } else if (letra === "o" && text.slice(i, i + 4) === "ober") {
      desencriptar += "o";
      i += 3;
    } else if (letra === "u" && text.slice(i, i + 4) === "ufat") {
      desencriptar += "u";
      i += 3;
    } else {
      desencriptar += letra;
    }
  }
  return desencriptar;
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");

encryptBtn.addEventListener("click", () => {
  output.value = encriptar(input.value.toLowerCase());
});

decryptBtn.addEventListener("click", () => {
  output.value = desencriptar(input.value.toLowerCase());
});

copyBtn.addEventListener("click", () => {
  output.select();
  document.execCommand("copiar");
  alert("Texto copiado");
});
