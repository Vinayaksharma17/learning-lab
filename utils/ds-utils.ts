/**
 * Utility functions for data structures and algorithms
 */

// Generic swap function for arrays
export function swap<T>(arr: T[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Print execution time of a function
export function measureExecutionTime<T>(fn: () => T): { result: T; timeInMs: number } {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  return {
    result,
    timeInMs: end - start
  };
}

// Compare two values (useful for sorting algorithms)
export function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
