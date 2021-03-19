import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'log-server-demo';
  constructor(private logger: NGXLogger) { }
  sendLog(): void {
    this.logger.error('Soy un cacaguate, Undefined is not a function');
  }

  deleteLog(): void {

  }
}
