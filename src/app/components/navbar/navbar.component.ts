import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  appName = 'QR Sync';
  currentUserEmail: Observable<string>;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUserEmail = authenticationService.getCurrentUserEmail();
  }

  signOut() {
    this.authenticationService.signOut()
      .subscribe(null, this.onSignOutFailed);
  }

  private onSignOutFailed(error) {
    alert('Error while signing out. ' + error.message);
  }
}
