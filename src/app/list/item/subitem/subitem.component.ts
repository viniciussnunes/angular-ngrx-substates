import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Store, select } from "@ngrx/store";

import { ListState, Item, selectSubitemById } from "../../states";

import * as fromSubitem from '../../states/actions/subitem.actions';

@Component({
  selector: "app-subitem",
  templateUrl: "./subitem.component.html",
  styleUrls: ["./subitem.component.css"]
})
export class SubitemComponent implements OnInit {

  subitens$: Observable<Item[]>;

  constructor(private store: Store<{ list; item; subitem }>) {}

  ngOnInit() {
    this.subitens$ = this.store.pipe(select(store => store.subitem.subitens));
    // this.store.pipe(select(store => store.subitem.subitens)).subscribe(x => console.log(x.filter(subitem => subitem.itemId === 1)));
  }

  onDelSubitem(id: string) {
    this.store.dispatch(fromSubitem.deleteSubitem({ id }));
  }
}
