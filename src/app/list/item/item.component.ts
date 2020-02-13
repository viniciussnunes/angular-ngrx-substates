import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import { ListState, Item } from "../states";

import * as fromItem from "../states/actions/item.actions";
import * as fromSubitem from "../states/actions/subitem.actions";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  itens$: Observable<Item[]>;

  constructor(private store: Store<{ list; item; subitem }>) {}

  ngOnInit() {
    this.itens$ = this.store.pipe(select(store => store.item.itens));
  }

  onDelItem(id: string) {
    this.store.dispatch(fromItem.deleteItem({ id }));
  }

  onAddSubitem(itemId: string) {
    const subitem = {
      id: "teste" + Math.random(),
      value: "Subitem",
      itemId
    };
    this.store.dispatch(fromSubitem.addSubitem({ subitem }));
  }
}
