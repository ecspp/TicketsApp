import { createAction } from "@ngrx/store";

export enum EAppActions {
  RESET = '[APPLICATION] Reset'
}

/* Application  actions */

export const reset = createAction(
  EAppActions.RESET
);
