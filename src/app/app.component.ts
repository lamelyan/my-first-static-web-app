import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{message}}</div>`,
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('https://apim-tot-public-api-security-spike.azure-api.net/public-api/test-api-security')
      .subscribe((resp: any) => this.message = resp.text);
  }
}