import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private authenticationService: AuthenticationService,
    private modalService: NgbModal) {
  }

  signInWithEmailAndPassword() {
    this.authenticationService.signInWithEmailAndPassword(this.email, this.password)
      .subscribe(null, this.onSignInFailed);
  }

  signInWithGoogle() {
    this.authenticationService.signInWithGoogle()
      .subscribe(null, this.onSignInFailed);
  }

  openInfoModal(modal) {
    this.modalService.open(modal);
  }

  private onSignInFailed(error) {
    alert('Error while signing in. ' + error.message);
  }
}
