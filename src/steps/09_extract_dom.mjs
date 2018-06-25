import { ceasarEncrypt, lastLetter } from "./operators";
import { subscribe } from "./rx";
import { getInput$, writeOutput } from "./domManipulation";

getInput$()
    |> lastLetter
    |> ceasarEncrypt(3)
    |> subscribe(writeOutput);
