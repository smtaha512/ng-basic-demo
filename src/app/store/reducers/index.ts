import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { ICounterState } from "../interfaces/counter.interface";
import { counterReducer } from "./counter.reducer";

export interface State {
  counter: ICounterState;
}

export const reducers: ActionReducerMap<State> = { counter: counterReducer };

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
