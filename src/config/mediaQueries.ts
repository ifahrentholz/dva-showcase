/**
 * Breakpoints a.k.a. Mediaqueries
 */
export default [
  {
    name: "MQ5",
    query: "(min-width: 1280px)",
    min: 1280,
    // fallBack for IE
    max: Number.MAX_SAFE_INTEGER || 10000,
    colCount: 4,
  },
  {
    name: "MQ4",
    query: "(min-width: 1024px)",
    min: 1024,
    max: 1279,
    colCount: 4,
  },
  {
    name: "MQ3",
    query: "(min-width: 760px)",
    min: 760,
    max: 1023,
    colCount: 4,
  },
  {
    name: "MQ2",
    query: "(min-width: 476px)",
    min: 476,
    max: 759,
    colCount: 6,
  },
  {
    name: "MQ1",
    query: "(min-width: 0px)",
    min: 0,
    max: 476,
    colCount: 12,
  },
];
