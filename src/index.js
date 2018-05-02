import { range, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import style from "./main.css";
import { curry, compose } from './utils';

const toUpper = s => s.toUpperCase();
const _substring = (x, y) => y.substring(x);
const substring = curry(_substring);
const toChar = x => String.fromCharCode(97 + x);
const isEven = x => x % 2 === 0;

// pipe function
const filterMap = pipe (
    filter(isEven),
    map(toChar)
);
const stream0$ = range(0,26);
stream0$
    .pipe(filterMap)
    .subscribe(console.log);

// with pipe operator
const stream1$ = 
    range(0,26)
        |> filter(isEven)
        |> map(toChar);
stream1$.subscribe(console.log);

// create new operator
const substringToUpperOperator = lenght => stream$ => 
    stream$ 
    |> map (toChar)
    |> map(substring(2)) 
    |> map(toUpper);
// btw map(f) . map(g) = map(g . f)
const stream2$ = range(0,26)
    |> substringToUpperOperator(2)
stream2$.subscribe(console.log);

// composed operator
const composedMap = compose(toUpper, substring(2), toChar);
const otherOperator = curry((length, stream$) => stream$ |> map (composedMap));
const stream3$ = range(0,26)
    |> substringToUpperOperator(2)
stream3$.subscribe(console.log);

// custom subscribe
const noop = Function.prototype;
const sendServerLog = e => console.log(`Log sended to server ${e}`); // send info to a real server seq/log/etc.
const completeLogin = fn => () => {
    sendServerLog(`finalized`);
    fn();
};
const errorLogin = fn => err => {
    sendServerLog(`error ${err}`)
    fn(err);
};
const subscribe = 
    (next, error = noop, complete = noop) => stream$ => stream$.subscribe(next, errorLogin(error), completeLogin(complete));
range(0,26)
    |> substringToUpperOperator(2)
    |> subscribe (console.log)

// create print
const print = subscribe (console.log);
range(0,26)
    |> substringToUpperOperator(2)
    |> print
