import { Component, Input } from '@angular/core';
import { Code } from 'src/app/model/code';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent {

  @Input() code: Code;

  constructor() { }

  private getIcon() {
    switch (this.code.type) {
      case 'TEXT': return 'short_text';
      case 'URL': return 'link';
      case 'ISBN': return 'book';
      case 'EMAIL': return 'email';
      case 'CALENDAR': return 'event';
      case 'CONTACT': return 'person';
      case 'PRODUCT': return 'shopping_cart';
      case 'PHONE': return 'phone';
      case 'SMS': return 'sms';
      default: return 'help_outline';
    }
  }
}
