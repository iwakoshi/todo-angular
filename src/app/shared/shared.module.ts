import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FirebaseModule } from '@app/core/firebase/firebase.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FirebaseModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
