export const simulateDelayUtil = (ms = 1_000) =>
  new Promise((result) => setTimeout(result, ms));
