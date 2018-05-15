import { fromEvent } from "rxjs";
import style from "./main.css";
import ceasarEncrypt from "./operators/caesar";
import lastLetter from "./operators/lastLetter";
import subscribe from "./rx/subscribe";
// DOM manipulation
const inputText = document.getElementById("input-text");
const encryptedText = document.getElementById("encrypted-text");
const input$ = fromEvent(inputText, "keyup");

input$
  |> lastLetter
  |> ceasarEncrypt(3)
  |> subscribe(s => (encryptedText.value += s));
