import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable} from 'rxjs';
import { pluck } from "rxjs/operators";

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['mail-view.component.scss'],
  // template: `
  //   <div class="mail-view">
  //     <h2>{{ (message | async).from }}</h2>
  //     <p>{{ (message | async).full }}</p>
  //   </div>
  //   <div class="mail-reply">
  //     <textarea
  //       (change)="updateReply($event.target.value)"
  //       placeholder="Type your reply..."
  //       [value]="reply">
  //     </textarea>
  //     <button type="button" (click)="sendReply()">
  //       Send
  //     </button>
  //   </div>
  // `
})
export class MailViewComponent implements OnInit {
  reply = '';
  hasUnsavedChanges = false;
  message: Observable<Mail> = this.route.data.pipe(pluck('message'));

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.reply = '';
      this.hasUnsavedChanges = false;
    });
  }

  updateReply(value: any) {
    this.reply = value.target.value;
    this.hasUnsavedChanges = true;
  }

  sendReply() {
    console.log('Sent!', this.reply);
    this.hasUnsavedChanges = false;
  }
}
