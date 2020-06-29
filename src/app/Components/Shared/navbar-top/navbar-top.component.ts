import { Component, OnInit, Input } from '@angular/core';
import { faSignOutAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import { MatIcon } from "@angular/material/icon";
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/Store/state/app.state';
import { logout } from 'src/app/Store/actions/auth.actions';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  faCog = faCog;
  styles = {};
  @Input('logo') logo: string = 'show';
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  @Input('left') set setLeft(left: string) {
    this.styles = {
      'left': left
    }
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}
