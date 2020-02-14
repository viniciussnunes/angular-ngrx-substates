import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/subitem.actions";

export interface State {
  subitens: any[];
  loading: boolean;
  error: Error;
}

const initialState = {
  subitens: [],
  loading: false,
  error: undefined
};

const listReducer = createReducer(
  initialState,
  on(Actions.loadSubitens, state => ({ ...state, state, loading: true })),
  on(Actions.loadSubitensSuccess, (state, { subitens }) => ({
    ...state,
    subitens,
    loading: false
  })),
  on(Actions.loadSubitensFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(Actions.addSubitem, (state, { subitem }) => ({
    ...state,
    subitens: [...state.subitens, subitem]
  })),
  on(Actions.updateSubitens, (state, { subitens }) => ({ ...state, subitens })),
  on(Actions.deleteSubitem, (state, { id }) => ({
    ...state,
    subitens: state.subitens.filter(subitem => subitem.id !== id)
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return listReducer(state, action);
}
