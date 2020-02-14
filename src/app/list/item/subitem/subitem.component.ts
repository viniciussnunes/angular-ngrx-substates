import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { Store, select } from "@ngrx/store";

import { Item } from "../../states";

import * as fromSubitem from "../../states/actions/subitem.actions";

@Component({
  selector: "app-subitem",
  templateUrl: "./subitem.component.html",
  styleUrls: ["./subitem.component.css"]
})
export class SubitemComponent implements OnInit {
  @Input()
  itemId: string;

  subitens$: Observable<Item[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<{ list; item; subitem }>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(store => store.subitem.loading));
    this.subitens$ = this.store.pipe(
      select(store => store.subitem.subitens),
      map(subitens =>
        subitens.filter(subitem => subitem.itemId === this.itemId)
      )
    );
  }

  onDelSubitem(id: string) {
    this.store.dispatch(fromSubitem.deleteSubitem({ id }));
  }
}
