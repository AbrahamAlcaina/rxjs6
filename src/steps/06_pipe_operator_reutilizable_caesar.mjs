import { fromEvent, pipe } from "rxjs";
import style from "./main.css";
import { filter, map } from "rxjs/operators";
import { curry, compose } from "./utils";
import { ceasarEncrypt } from "./operators";
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

const encrypted$ =
  input$ |> map(getLastCharFromEvent) |> filter(isLetter) |> ceasarEncrypt(3);

encrypted$.subscribe(s => (encryptedText.value += s));
