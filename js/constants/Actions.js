export const BuilderActions = [
  'TEST_RECEIVE',
  'SERIESES_RECEIVE',
  'SERIES_RECEIVE',
  'ADD_DECK_CARD',
  'REMOVE_DECK_CARD',
].reduce((p, v) => (p[v] = Symbol(v), p), {});
