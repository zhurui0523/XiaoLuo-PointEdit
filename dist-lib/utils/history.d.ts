export interface HistoryState<T> {
    past: T[];
    present: T;
    future: T[];
}
export declare function createInitialHistory<T>(initialValue: T): HistoryState<T>;
export declare function pushHistoryState<T>(state: HistoryState<T>, newValue: T): HistoryState<T>;
export declare function undoHistory<T>(state: HistoryState<T>): HistoryState<T>;
export declare function redoHistory<T>(state: HistoryState<T>): HistoryState<T>;
