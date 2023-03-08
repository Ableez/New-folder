const passText = document.querySelector("#passText");
const btn = document.querySelector("#btn");
const passLen = document.querySelector("#passLen");
const copy = document.querySelector("#copy");
const pss = document.querySelector("#pss");
let passLength = 12;
passLen.addEventListener("change", (e) => {
  passLength = e.target.value;
});

const combinations = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "{",
  "}",
  "|",
  ":",
  '"',
  "<",
  ">",
  "?",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "|",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  '"',
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
];
btn.addEventListener("click", () => {
  const passwordCharacters = [];
  for (let i = 0; i < passLength; i++) {
    const rand = Math.floor(
      Math.random() * combinations.length + passLength
    );
    passwordCharacters.push(combinations[rand]);
  }
  passText.innerHTML = passwordCharacters.join("");
  document.getElementById("copy").style.animationName = ""
});

passText.addEventListener("click", () => {
  navigator.clipboard
    .writeText(passText.innerHTML)
    .then(() => {
      console.log("Text copied to clipboard: ", passText.innerHTML);
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
    });
});
pss.addEventListener("click", () => {
  document.getElementById("copy").style.animationName = "copier"
})