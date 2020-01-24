import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signInAnonymously() {
    this.auth.signInAnonymously().then(() => this.postSignIn()).catch(error => console.error(error));
  }

  signInWithGoogle() {
    this.auth.signInWithGoogle().then(() => this.postSignIn()).catch(error => console.error(error));
  }

  signInWithGithub() {
    this.auth.signInWithGithub().then(() => this.postSignIn()).catch(error => console.error(error));
  }

  private postSignIn(): void {
    this.router.navigate(['/tasks']);
  }
}
