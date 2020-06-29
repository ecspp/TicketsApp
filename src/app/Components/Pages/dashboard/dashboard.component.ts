import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/Store/state/app.state';
import { loadAllContacts } from 'src/app/Store/actions/contacts.actions';
import { selectAllContacts } from 'src/app/Store/selectors/contact.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contacts$: Observable<any> = this.store.select(selectAllContacts);
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    // this.contacts$.subscribe(x => console.log(x));
  }

  getContacts() {
    this.store.dispatch(loadAllContacts());
  }

}
