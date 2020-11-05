/**
 * Gets a random number in a specific range
 */
export function getRandomNumber(data: { from?: number; to: number }) {
  const to = data.to;
  const from = data.from || 0;

  return Math.floor(Math.random() * (to - from + 1)) + from;
}

/**
 * Delays
 */
export function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}
