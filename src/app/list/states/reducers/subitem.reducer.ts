import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/subitem.actions";

export interface State {
  subitens: any[];
  error: Error;
}

const initialState = {
  subitens: [
    { id: 1, value: "teste", itemId: 1 },
    { id: 2, value: "lala", itemId: 2 }
  ],
  error: undefined
};

const listReducer = createReducer(
  initialState,
  on(Actions.addSubitem, (state, { subitem }) => ({
    ...state,
    subitens: [...state.subitens, subitem]
  })),
  on(Actions.getSubitens, state => ({ ...state, state })),
  on(Actions.updateSubitens, (state, { subitens }) => ({ ...state, subitens })),
  on(Actions.deleteSubitem, (state, { id }) => ({
    ...state,
    subitens: state.subitens.slice(0, state.subitens.length - 1)
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return listReducer(state, action);
}
