import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Code } from 'src/app/model/code';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  codes: Observable<Code[]>;

  constructor(private databaseService: DatabaseService) {
    this.codes = this.databaseService.getCodes();
  }

  // The trackByFn function allows the *ngFor loop
  // to only update elements based on an element property.
  // In this case, a code is considered to be the same
  // entity as another if the ids match.
  trackByFn(index, code: Code) {
    return code.id;
  }
}
