import { fromEvent } from "rxjs";
import "rxjs-compat/add/operator/map";
import "rxjs-compat/add/operator/filter";
import style from "./main.css";
// DOM manipulation
const inputText = document.getElementById("input-text");
const encryptedText = document.getElementById("encrypted-text");
const input$ = fromEvent(inputText, "keyup");

const ceasarShift = 3;

input$
  .map(e => {
    const { value } = e.target;
    return value.substring(value.length - 1);
  })
  .filter(str => {
    if (str.length !== 1) {
      return false;
    }
    const match = str.match(/[a-z]/i);
    return match;
  })
  .map(char => {
    return char.charCodeAt(0);
  })
  .map(code => code + ceasarShift)
  .map(code => {
    return String.fromCharCode(code);
  })
  .subscribe(s => {
    encryptedText.value += s;
  });
