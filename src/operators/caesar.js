import { map } from "rxjs/operators";
import { compose } from "../utils";

const charToCode = s => s.charCodeAt(0);
const toChar = code => String.fromCharCode(code);
const ceasarShift = shift => code => code + shift;

const caesarAlgorithm = shift =>
  compose(
    toChar,
    ceasarShift(shift),
    charToCode
  );

// prettier-ignore
const ceasarEncrypt = shift => stream$ => 
    stream$ |> map(caesarAlgorithm(shift));

export { ceasarEncrypt as default, caesarAlgorithm };
