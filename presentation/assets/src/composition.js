import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

const myButton = $('#myButton'),
    myResult = $('#myResult');

const source = fromEvent(myButton, 'click');

const numOfClicks = source
    |> scan(count => count + 1, 0);

numOfClicks
    .subscribe(n => myResult.innerText = n);