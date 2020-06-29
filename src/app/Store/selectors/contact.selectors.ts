import * as fromContacts from "../reducers/contacts.reducer";
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectContactState = createFeatureSelector<fromContacts.ContactState>('contacts');

export const selectAllContacts = createSelector(
  selectContactState,
  fromContacts.adapter.getSelectors().selectAll
)
