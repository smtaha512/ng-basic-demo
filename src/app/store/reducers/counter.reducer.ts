import { createReducer, on, Action } from "@ngrx/store";
import * as fromCounterAction from "./../actions/counter.actions";
import { ICounterState } from "../interfaces/counter.interface";
import { counterState } from "../states/counter.state";

const counterReducers = createReducer(
  counterState,
  on(fromCounterAction.incrementCounter, (state) => ({
    ...state,
    value: state.value + 1,
  })),
  on(fromCounterAction.decrementCounter, (state) => ({
    ...state,
    value: state.value - 1,
  })),
  on(fromCounterAction.incrementCounterBy, (state, { num }) => ({
    ...state,
    value: state.value + num,
  })),
  on(fromCounterAction.decrementCounterBy, (state, { num }) => ({
    ...state,
    value: state.value - num,
  }))
);

export function counterReducer(
  state: ICounterState | undefined,
  action: Action
) {
  return counterReducers(state, action);
}
