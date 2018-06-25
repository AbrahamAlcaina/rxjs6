import { map, filter } from "rxjs/operators";

const getLastCharFromEvent = e => {
  const { value } = e.target;
  return value ? value.substring(value.length - 1) : "";
};
const isLetter = str => str.length === 1 && str.match(/[a-z]/i);
const lastLetterOperator = stream$ =>
  stream$
  |> map(getLastCharFromEvent)
  |> filter(isLetter);

export { lastLetterOperator as default };
