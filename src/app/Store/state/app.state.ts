import { AuthState, initialState as initialAuthState } from './auth.state';
import * as fromContacts from "../reducers/contacts.reducer";
import { ContactState } from '../reducers/contacts.reducer';

export interface IAppState {
  auth: AuthState,
  contacts: ContactState
}

export const initialState: IAppState = {
  auth: initialAuthState,
  contacts: fromContacts.initialState
}
