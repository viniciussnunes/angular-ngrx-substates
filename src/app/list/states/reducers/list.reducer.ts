import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/list.actions";

export interface State {
  name: string,
  error: Error;
}

const initialState = {
  name: 'List Teste',
  error: undefined
};

const listReducer = createReducer(
  initialState,
  on(Actions.updateList, state => ({ ...state })),
  on(Actions.updateListSuccess, (state, { name }) => ({ name })),
  on(Actions.updateListFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return listReducer(state, action);
}
