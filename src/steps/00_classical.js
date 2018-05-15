import { fromEvent } from "rxjs";
import "rxjs-compat/add/operator/map";
import "rxjs-compat/add/operator/filter";
import style from "./main.css";
// DOM manipulation
const inputText = document.getElementById("input-text");
const encryptedText = document.getElementById("encrypted-text");
const input$ = fromEvent(inputText, "keyup");
// get last character
const getLastCharFromEvent = e => {
  const { value } = e.target;
  return value.substring(value.length - 1);
};
const isLetter = str => str.length === 1 && str.match(/[a-z]/i);
// caesar algorimth
const charToCode = s => s.charCodeAt(0);
const ceasarShift = shift => code => code + shift;
const toChar = code => String.fromCharCode(code);
// classical
input$
  .map(getLastCharFromEvent)
  .filter(isLetter)
  .map(charToCode)
  .map(ceasarShift(3))
  .map(toChar)
  .subscribe(s => {
    encryptedText.value += s;
  });
