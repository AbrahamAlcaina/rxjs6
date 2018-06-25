import { fromEvent } from "rxjs";
import style from "./main.css";
import { filter, map } from "rxjs/operators";
import { compose, curry } from "./utils";
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
const ceasarShift = curry((shift, code) => code + shift);
const ceasarEncrypt = compose(
  toChar,
  ceasarShift(3),
  charToCode
);

// prettier-ignore
const encrypted$ =
  input$
    |> map(getLastCharFromEvent)
    |> filter(isLetter)
    |> map(ceasarEncrypt);

encrypted$.subscribe(s => (encryptedText.value += s));
