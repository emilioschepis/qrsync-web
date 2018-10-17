import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { MatIconModule } from '@angular/material';

import { ListComponent } from '../../components/list/list.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ElementComponent } from '../../components/element/element.component';
import { ElementCalendarComponent } from '../../components/element-calendar/element-calendar.component';
import { ElementActionsComponent } from '../../components/element-actions/element-actions.component';
import { ElementContactComponent } from '../../components/element-contact/element-contact.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbTabsetModule,
    ClipboardModule,
    MatIconModule
  ],
  declarations: [
    ListComponent,
    NavbarComponent,
    ElementComponent,
    ElementCalendarComponent,
    ElementActionsComponent,
    ElementContactComponent
  ]
})
export class ContentModule { }
