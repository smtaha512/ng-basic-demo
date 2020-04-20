import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ICounterState } from "../../store/interfaces/counter.interface";
import {
  selectCurrentValue,
  selectCounterState,
} from "../../store/selectors/counter.selectors";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"],
})
export class CounterComponent implements OnInit {
  private readonly currentCount$ = this.store.pipe(select(selectCurrentValue));
  private readonly wholeCounter$ = this.store.pipe(select(selectCounterState));
  constructor(private readonly store: Store<ICounterState>) {}

  ngOnInit(): void {}
}
