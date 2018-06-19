const throttledClicks = source
    .throttleTime(1000);

const clickXPositions = throttledClicks
    .map(evt => evt.clientX);

const totalXValues = clickXPositions
    .scan((total, v) => total + v, 0);

/// Equivalent
const totalXValues = source
    .throttleTime(1000)
    .map(evt => evt.clientX)
    .scan((total, v) => total + v, 0);

/*

-C-C--C-C--C--C----> clicks
[throttleTime(1000)]
-C----C----C--C----> throttledClicks
[map(evt => evt.clientX)]
-5----8----2--4----> clickXPositions
[scan((total, v) => total + v, 0)]
-5---(13)-(15)(19)-> totalXValues

*/