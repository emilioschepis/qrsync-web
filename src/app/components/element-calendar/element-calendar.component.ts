import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-calendar',
  templateUrl: './element-calendar.component.html',
  styleUrls: ['./element-calendar.component.css']
})
export class ElementCalendarComponent implements OnInit {

  @Input() event: string;
  description: string;
  location: string;
  summary: string;
  startTime: Date;
  endTime: Date;

  constructor() { }

  private dateFromTime(time): Date {
    const year = time['year'];
    const month = time['month'] - 1;
    const day = time['day'];
    const hours = time['hours'];
    const minutes = time['minutes'];
    const seconds = time['seconds'];
    return new Date(year, month, day, hours, minutes, seconds);
  }

  ngOnInit() {
    try {
      const data = JSON.parse(this.event)['calendarEvent'];
      this.description = data['description'];
      this.location = data['location'];
      this.summary = data['summary'];
      this.startTime = this.dateFromTime(data['start']);
      this.endTime = this.dateFromTime(data['end']);
    } catch (error) {
      alert('Error while parsing calendar element.');
    }
  }
}
