import { createAction, props } from "@ngrx/store";

export const incrementCounter = createAction("[Counter] Increment");
export const decrementCounter = createAction("[Counter] Decrement");

export const incrementCounterBy = createAction(
  "[Counter] Increment By",
  props<{ num: number }>()
);
export const decrementCounterBy = createAction(
  "[Counter] Decrement By",
  props<{ num: number }>()
);
