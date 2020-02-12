import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/item.actions";

export interface State {
  itens: any[];
  error: Error;
}

const initialState = {
  itens: [],
  error: undefined
};

const listReducer = createReducer(
  initialState,
  on(Actions.addItem, (state, { item }) => ({ ...state, itens: [...state.itens, item] })),
  on(Actions.getItens, state => ({ ...state, state })),
  on(Actions.updateItens, (state, { itens }) => ({ ...state, itens })),
  on(Actions.deleteItem, (state, { id }) => ({ ...state, list: state.itens.filter(item => item.id !== id) }))
);

export function reducer(state: State | undefined, action: Action) {
  return listReducer(state, action);
}
