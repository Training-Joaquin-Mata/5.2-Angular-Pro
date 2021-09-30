import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get<Mail[]>(`/api/messages?folder=${folder}`)
      .pipe(map(response => <Mail[]>response));
      // .pipe(map(response => <Mail[]>response.json()));
      
  }

  getMessage(id: string): Observable<Mail> {
    return this.http
      .get(`/api/messages/${id}`)
      .pipe(map(response => <Mail>response));
      // .pipe(map(response => response.json()));
  }
}