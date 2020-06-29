import { createReducer, Action, on } from "@ngrx/store";
import { initialState, IAppState } from '../state/app.state';
import * as AppActions from '../actions/app.actions';

const _appReducer = createReducer(initialState,
  on(AppActions.reset, (state: IAppState) => (initialState))
);

export function appReducer(state: IAppState, action: Action) {
  return _appReducer(state, action);
}
