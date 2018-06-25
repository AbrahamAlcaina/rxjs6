import { fromEvent } from 'rxjs';

const myButton = $('#myButton'),
    myResult = $('#myResult');

/// Old school
const counter = 0;
myButton.addEventListener('click', () => {
    counter++;
    myButton.innerText = counter;
});

/// Rxjs 8-)
const source = fromEvent(myButton, 'click');

const numOfClicks = source
    .scan(count => count + 1, 0);

numOfClicks
    .subscribe(n => myResult.innerText = n);
