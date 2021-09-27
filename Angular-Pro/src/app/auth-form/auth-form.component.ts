import { Component, Output, ViewChild ,ViewChildren, AfterViewInit ,EventEmitter, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['../app.component.scss'],
  styles: [`
  .email{
    border-color: #9f72e6
  }
  `]
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  
  title: string = 'Login'; 

  showMessage: boolean = false;

  @ViewChild('email') email !: ElementRef

  @ViewChildren(AuthMessageComponent) message !: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember !: QueryList<AuthRememberComponent>; 
 
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

constructor(private renderer: Renderer2 ,private cd: ChangeDetectorRef ){}

  ngAfterViewInit(){
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address' )
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.email.nativeElement.focus();
  //  this.email.nativeElement.setAttribute('placeholder', 'Enter your email');
  //  this.email.nativeElement.classList.add('email');
  //  this.email.nativeElement.focus();
    if(this.message){
      this.message.forEach((message)=>{
        message.days=30;
      });
      this.cd.detectChanges();
    }
  }
  ngAfterContentInit(){
     if(this.remember){
       this.remember.forEach((item)=>{
          item.checked.subscribe((checked: boolean)=>{ this.showMessage = checked;})
       });
     };
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
