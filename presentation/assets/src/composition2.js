const throttledClicks = source
    |> throttleTime(1000);

const clickXPositions = throttledClicks
    |> map(evt => evt.clientX);

const totalXValues = clickXPositions
    |> scan(count => count + 1, 0);

/// Equivalent
const totalXValues = source
    |> throttleTime(1000);
    |> map(evt => evt.clientX);
    |> scan(count => count + 1, 0);
