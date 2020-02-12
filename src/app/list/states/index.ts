import { createSelector } from "@ngrx/store";

export interface List {
  id: number;
  name: string;
}

export interface Item {
  id: number;
  content: string;
  listId: number;
}

export interface Subitem {
  id: number;
  value: string;
  itemId: number;
}

export interface ListState {
  selectedList: List;
  allItens: Item[];
}

export interface ItemState {
  selectedItem: List;
  allSubitens: Subitem[];
}

const selectList = (state: ListState) => state.selectedList;
const selectAllItens = (state: ListState) => state.allItens;
const selectItem = (state: ItemState) => state.selectedItem;
const selectAllSubitens = (state: ItemState) => state.allSubitens;

export const selectSubitemViews = createSelector(
  selectItem,
  selectAllSubitens,
  (itens, subitens) => {
    return subitens.map(subitem => ({ ...subitem, item: selectItem }));
  }
);
