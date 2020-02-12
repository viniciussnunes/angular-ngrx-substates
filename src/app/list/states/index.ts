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
  selectedItem: Item;
  allSubitens: Subitem[];
  selectedSubitem: Subitem;
}

export const selectList = (state: ListState) => state.selectedList;
export const selectItem = (state: ListState) => state.selectedItem;
export const selectSubitem = (state: ListState) => state.selectedSubitem;

export const selectItens = (state: ListState) => state.allItens;
export const selectSubitens = (state: ListState) => state.allSubitens;

export const selectItemComplete = createSelector(
  selectItem,
  selectSubitens,
  (item, subitens) => ({ ...item, subitens })
);

export const selectItensWithSubitens = createSelector(
  selectItens,
  selectSubitens,
  (itens, subitens) => {
    return itens.map(item => ({
      ...item, subitens: subitens.filter(subitem => subitem.itemId === item.id)
    }));
  }
);

export const selectListComplete = createSelector(
  selectList,
  selectItensWithSubitens,
  (list, itens) => ({ ...list, itens })
);