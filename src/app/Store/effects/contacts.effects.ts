import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { tap, map, exhaustMap, mapTo } from 'rxjs/operators';
import * as ContactActions from "../actions/contacts.actions";
import { ContactService } from 'src/app/Services/contact.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class ContactEffects {

loadAll$ = createEffect(() => this.action$.pipe(
  ofType(ContactActions.loadAllContacts),
  tap(() => {
    console.log('loading...');
    this.contactService.getAllContacts()
  }),
  mapTo(() => EMPTY)
), {dispatch: false});

  constructor(
    private action$: Actions,
    private contactService: ContactService
  ) {}
}
