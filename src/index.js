import { fromEvent } from "rxjs";
import { lastLetter, ceasarEncrypt } from "./operators";
import style from "./main.css";
// DOM manipulation
const inputText = document.getElementById("input-text");
const encryptedText = document.getElementById("encrypted-text");
const clean = document.getElementById("clean");
const input$ = fromEvent(inputText, "keyup");
const clean$ = fromEvent(clean, "click");

const encrypted$ = input$ |> lastLetter |> ceasarEncrypt(3);

encrypted$.subscribe(s => (encryptedText.value += s));
clean$.subscribe(c => {
  inputText.value = "";
  encryptedText.value = "";
});
