import { fromEvent } from "rxjs";
import style from "./main.css";
import { ceasarEncrypt, lastLetter } from "./operators";
import { subscribe } from "./rx";
// DOM manipulation
const inputText = document.getElementById("input-text");
const encryptedText = document.getElementById("encrypted-text");
const input$ = fromEvent(inputText, "keyup");

input$
  |> lastLetter
  |> ceasarEncrypt(3)
  |> subscribe(s => (encryptedText.value += s));
