import { createReducer, Action, on } from '@ngrx/store';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { allContactsLoaded } from '../actions/contacts.actions';
import { ContactDTO } from 'src/app/Models/ContactDTO';

export interface ContactState extends EntityState<ContactDTO> {
  selectedContactId: number | null
}

export const adapter: EntityAdapter<ContactDTO> = createEntityAdapter<ContactDTO>();

export const initialState: ContactState = adapter.getInitialState({
  selectedContactId: null
});

const contactReducer = createReducer(
  initialState,
  on(allContactsLoaded, (state, { contacts }) => {
    return adapter.addMany(contacts, state);
  })
);

export function reducer(state: ContactState | undefined, action: Action) {
  return contactReducer(state, action);
}
