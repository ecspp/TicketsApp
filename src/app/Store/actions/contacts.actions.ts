import { createAction, props } from '@ngrx/store';
import { ContactDTO } from 'src/app/Models/ContactDTO';

export enum EContactActions {
  LOAD_ALL = '[Contacts] Load All',
  ALL_LOADED = '[Contacts] All Contacts Loaded'
}

export const loadAllContacts = createAction(EContactActions.LOAD_ALL);
export const allContactsLoaded = createAction(EContactActions.ALL_LOADED, props<{contacts: ContactDTO[]}>());

