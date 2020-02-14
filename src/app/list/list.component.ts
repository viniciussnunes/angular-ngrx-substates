import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import * as fromList from "./states/actions/list.actions";
import * as fromItem from "./states/actions/item.actions";
import * as fromSubitem from "./states/actions/subitem.actions";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  name$: Observable<string>;

  constructor(private store: Store<{ list; item; subitem }>) {
    this.name$ = store.pipe(select(store => store.list.name));
  }

  ngOnInit() {
    this.store.dispatch(fromSubitem.loadSubitens());
  }

  onAlterName() {
    this.store.dispatch(fromList.updateListSuccess({ name: "New" }));
  }

  onAddItem() {
    const item = {
      id: 'teste' + Math.random(),
      content: 'Item'
    };
    this.store.dispatch(fromItem.addItem({ item }));
  }
}
