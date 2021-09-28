import { AfterContentInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
//   template: `
//   <div>
//   <ng-container [ngTemplateOutlet]="tmpl" [ngTemplateOutletContext]="ctx">
//   </ng-container>
//   <ng-template #tmpl let-name let-location="location">
//   {{ name }} : {{ location }} 
//   </ng-template>
// </div>
//   `,
// template:`
//   <div>
//     <example-one> </example-one>
//     <example-two> </example-two>
//     <example-three> </example-three>
//   </div>
// `,
  template: `
  <div>
    <button (click)="addProp()">Add property</button>
    <button (click)="changeUser()">Change user object</button>
    <button (click)="changeName()">Change name property</button>
    <div class="users">
      <example-one [user]="user"></example-one>
      <example-two [user]="user"></example-two>
    </div>
  </div>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // // title = 'Angular-Pro';

  // // rememberMe: boolean = false;

  // // createUser(user: User) {
  // //   console.log('Create account', user);
  // // }

  // // loginUser(user: User) {
  // //   console.log('Login', user, this.rememberMe);
  // // }

  // // rememberUser(remember: boolean){
  // //   this.rememberMe = remember;
  // // }}

  // @ViewChild('entry', { read: ViewContainerRef }) entry : ViewContainerRef;
  // @ViewChild('tmpl') tmpl : TemplateRef<any>;

  // ngAfterContentInit() {
  //   this.entry.createEmbeddedView(this.tmpl,{
  //     $implicit: 'Joaquin Mata',
  //     location: 'Mexico, mex'
  //   });
  // }

  // ctx={
  //   $implicit: 'Joaquin Mata',
  //   location: 'Mexico, Mexico'
  // }

  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  };

  addProp() {
    this.user.email = 'blink@blink-182.net';
  }

  changeName() {
    this.user.name = 'Travis Barker';
  }

  changeUser() {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California'
    };
  }


}