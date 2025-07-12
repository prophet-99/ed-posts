// export const simulateDelayUtil = (ms = 1_000) =>
export const simulateDelayUtil = (ms = 300) =>
  new Promise((result) => setTimeout(result, ms));
