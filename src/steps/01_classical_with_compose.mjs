import { fromEvent } from "rxjs";
import "rxjs-compat/add/operator/map";
import "rxjs-compat/add/operator/filter";
import style from "./main.css";
import { compose } from "./utils";
// DOM manipulation
const inputText = document.getElementById("input-text");
const encryptedText = document.getElementById("encrypted-text");
const input$ = fromEvent(inputText, "keyup");
// last character
const getLastCharFromEvent = e => {
  const { value } = e.target;
  return value.substring(value.length - 1);
};
const isLetter = str => str.length === 1 && str.match(/[a-z]/i);
// caesar algorimth
const charToCode = s => s.charCodeAt(0);
const toChar = code => String.fromCharCode(code);
const ceasarShift = shift => code => code + shift;
// map (f) . map(g)  = map (f.g)
const ceasarEncrypt = compose(toChar, ceasarShift(3), charToCode);

input$
  .map(getLastCharFromEvent)
  .filter(isLetter)
  .map(ceasarEncrypt)
  .subscribe(s => {
    encryptedText.value += s;
  });
