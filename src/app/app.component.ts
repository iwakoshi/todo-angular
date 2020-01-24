import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AuthService } from './shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public auth: AuthService,
    private router: Router,
    public afAuth: AngularFireAuth,
  ) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['task']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
