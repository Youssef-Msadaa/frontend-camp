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

  registerUser() {
    console.log(this.data);
    this.shareService.createUser('user/register', this.data).subscribe(
      (createdUser) => {
        this.router.navigate(['/login']);
        console.log(createdUser);
        this.data = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        };
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
