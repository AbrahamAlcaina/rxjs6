import { fromEvent, pipe } from "rxjs";
import { lastLetter, ceasarEncrypt } from "./operators";
import style from "./main.css";
// DOM manipulation
const inputText = document.getElementById("input-text");
const encryptedText = document.getElementById("encrypted-text");
const input$ = fromEvent(inputText, "keyup");
const encrypted$ = input$
    |> lastLetter
    |> ceasarEncrypt(3);

encrypted$.subscribe(s => (encryptedText.value += s));
