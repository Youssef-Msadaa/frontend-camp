import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareUserService } from 'src/app/services/share-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  constructor(public shareService: ShareUserService, private router: Router) {}
  messageError: any;
  registerUser() {
    console.log(this.data);
    this.shareService.createUser('user/register', this.data).subscribe(
      (createdUser) => {
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
        alert('You are already connected please log in');
        this.data = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        };
        return false;
      }
    );
  }
}
