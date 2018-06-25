import { ceasarEncrypt, lastLetter } from "./operators";
import { subscribe } from "./rx";
import { getInput$, writeOutput } from "./domManipulation";

// prettier-ignore
getInput$() 
    |> lastLetter 
    |> ceasarEncrypt(3) 
    |> subscribe(writeOutput);
