import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/list.actions';

export interface State {
  list: any[],
  error: Error
}

const initialState = {
  list: [],
  error: undefined
}

const listReducer = createReducer(
  initialState,
  on(Actions.updateList, state => ({ ...state })),
  on(Actions.updateListSuccess, (state, list) => ({ list })),
  on(Actions.updateListFailure, (state, error) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return listReducer(state, action);
}