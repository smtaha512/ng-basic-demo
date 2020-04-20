import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState } from "../interfaces/counter.interface";

export const selectCounterState = createFeatureSelector<ICounterState>(
  "counter"
);

export const selectCurrentValue = createSelector(
  selectCounterState,
  (state) => state.value
);
