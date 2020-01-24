import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated$: Observable<boolean>;
  uid$: Observable<string>;

  constructor(public afAuth: AngularFireAuth) {
    this.authenticated$ = afAuth.authState.pipe(map(user => !!user));
    this.uid$ = afAuth.authState.pipe(map(user => user.uid));
  }

  async signIn(provider: auth.AuthProvider): Promise<void | auth.UserCredential> {
    return this.afAuth.auth.signInWithPopup(provider)
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  async signInAnonymously(): Promise<void | auth.UserCredential> {
    return this.afAuth.auth.signInAnonymously()
      .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));
  }

  async signInWithGoogle(): Promise<void | auth.UserCredential> {
    return this.signIn(new auth.GoogleAuthProvider())
      .catch(error => console.log('ERROR @ AuthService#signInWithGoogle() :', error));
  }

  async signInWithGithub(): Promise<void | auth.UserCredential> {
    return this.signIn(new auth.GithubAuthProvider())
      .catch(error => console.log('ERROR @ AuthService#signInWithGithub() :', error));
  }

  async signOut() {
    this.afAuth.auth.signOut();
  }
}
