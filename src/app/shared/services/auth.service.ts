import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated$: Observable<boolean>;
  constructor(public afAuth: AngularFireAuth) { }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
