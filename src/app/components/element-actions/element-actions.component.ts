import { Component, Input } from '@angular/core';
import { Code } from 'src/app/model/code';
import { QueryService } from 'src/app/services/query.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-element-actions',
  templateUrl: './element-actions.component.html',
  styleUrls: ['./element-actions.component.css']
})
export class ElementActionsComponent {

  @Input() code: Code;

  constructor(private queryService: QueryService,
    private databaseService: DatabaseService) { }

  delete() {
    if (window.confirm('Do you want to delete this code?')) {
      this.databaseService.deleteCode(this.code.id)
        .subscribe(null, this.onDeleteFailed);
    }
  }

  editTitle() {
    const newTitle = window.prompt('Insert the new title.', this.code.title);
    if (newTitle != null) {
      this.databaseService.updateCodeTitle(this.code.id, newTitle)
        .subscribe(null, this.onUpdateFailed);
    }
  }

  private onUpdateFailed(error) {
    alert('Error while updating the code\'s title. ' + error.message);
  }

  private onDeleteFailed(error) {
    alert('Error while deleting the code. ' + error.message);
  }

  private openUrl(url) {
    window.open(url, '_blank');
  }

  searchGoogle() {
    const url = this.queryService.getGoogleQuery(this.code);
    this.openUrl(url);
  }

  searchIsbn() {
    const url = this.queryService.getIsbnQuery(this.code);
    this.openUrl(url);
  }

  searchProduct() {
    const url = this.queryService.getProductQuery(this.code);
    this.openUrl(url);
  }
}
