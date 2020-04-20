import { Component } from "@angular/core";
import { State, Store } from "@ngrx/store";
import { ICounterState } from "./store/interfaces/counter.interface";
import {
  incrementCounter,
  decrementCounter,
} from "./store/actions/counter.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ng-ssr-pwa";
  constructor(private readonly store: Store<ICounterState>) {}
  increment() {
    this.store.dispatch(incrementCounter());
  }
  decrement() {
    this.store.dispatch(decrementCounter());
  }
}
