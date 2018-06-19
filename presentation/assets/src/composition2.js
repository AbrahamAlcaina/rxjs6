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
