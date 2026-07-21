export interface HistoryState<T> {
  past: T[];
  present: T;
  future: T[];
}

export function createInitialHistory<T>(initialValue: T): HistoryState<T> {
  return {
    past: [],
    present: initialValue,
    future: [],
  };
}

export function pushHistoryState<T>(
  state: HistoryState<T>,
  newValue: T
): HistoryState<T> {
  // Prevent adding identical state consecutively
  if (JSON.stringify(state.present) === JSON.stringify(newValue)) {
    return state;
  }
  return {
    past: [...state.past, state.present],
    present: newValue,
    future: [], // clear redo branch on action
  };
}

export function undoHistory<T>(state: HistoryState<T>): HistoryState<T> {
  if (state.past.length === 0) return state;

  const previous = state.past[state.past.length - 1];
  const newPast = state.past.slice(0, state.past.length - 1);

  return {
    past: newPast,
    present: previous,
    future: [state.present, ...state.future],
  };
}

export function redoHistory<T>(state: HistoryState<T>): HistoryState<T> {
  if (state.future.length === 0) return state;

  const next = state.future[0];
  const newFuture = state.future.slice(1);

  return {
    past: [...state.past, state.present],
    present: next,
    future: newFuture,
  };
}
