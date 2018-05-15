import { map } from "rxjs/operators";
import { compose } from "../utils";

const charToCode = s => s.charCodeAt(0);
const toChar = code => String.fromCharCode(code);
const ceasarShift = shift => code => code + shift;

const caesar = shift => compose(toChar, ceasarShift(shift), charToCode);
const ceasarEncrypt = shift => stream$ => stream$ |> map(caesar(shift));

export { ceasarEncrypt as default, caesar };
