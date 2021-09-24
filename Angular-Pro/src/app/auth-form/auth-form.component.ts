import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['../app/app.component.scss']
})
export class AuthFormComponent {
  
  showMessage: boolean = false;

  @ContentChild(AuthRememberComponent) remember !: AuthRememberComponent; 

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit(){
      console.log(this.remember);
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
