import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ContactState } from '../Store/reducers/contacts.reducer';
import { environment } from 'src/environments/environment';
import { ContactDTO } from '../Models/ContactDTO';
import { allContactsLoaded } from '../Store/actions/contacts.actions';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getAllURL = environment.apiUrl + 'contact';

  constructor(private http: HttpClient, private store: Store<ContactState>) { }

  getAllContacts() {
    console.log('GETTING ALL KONTAKS');

    this.http.get<ContactDTO[]>(this.getAllURL).subscribe(
      result => {
        this.store.dispatch(allContactsLoaded({contacts: result}))
      },
      err => {
        console.log('ERROR getting all contacts:', err)
      }
    )
  }
}
