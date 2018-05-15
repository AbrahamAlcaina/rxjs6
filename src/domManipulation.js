import { fromEvent } from "rxjs";
import style from "./main.css";

const inputText = document.getElementById("input-text");
const encryptedText = document.getElementById("encrypted-text");
const getInput$ = () => fromEvent(inputText, "keyup");
const writeOutput = s => (encryptedText.value += s);

export { getInput$, writeOutput };
