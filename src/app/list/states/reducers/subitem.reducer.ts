import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/subitem.actions";

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
  on(Actions.addSubitem, (state, { subitem }) => ({ ...state, itens: [...state.itens, subitem] })),
  on(Actions.getItens, state => ({ ...state, state })),
  on(Actions.updateItens, (state, { itens }) => ({ ...state, itens })),
  on(Actions.deleteSubitem, (state, { id }) => ({ ...state, list: state.itens.filter(subitem => subitem.id !== id) }))
);

export function reducer(state: State | undefined, action: Action) {
  return listReducer(state, action);
}
