import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-contact',
  templateUrl: './element-contact.component.html',
  styleUrls: ['./element-contact.component.css']
})
export class ElementContactComponent implements OnInit {

  @Input() event: string;
  name: string;
  addresses: string[];
  phones: string[];
  emails: string[];
  company: string;
  title: string;

  constructor() { }

  ngOnInit() {
    try {
      const data = JSON.parse(this.event)['contactInfo'];
      this.emails = data['emails'].map(it => it.address);
      this.addresses = data['addresses'].map(it => it.addressLines.join(' '));
      this.name = data['name']['formattedName'];
      this.phones = data['phones'].map(it => it.number);
      this.title = data['title'];
      this.company = data['organization'];
    } catch (error) {
      alert('Error while parsing contact element.');
    }
  }
}
