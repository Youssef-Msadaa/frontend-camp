import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareUserService } from 'src/app/services/share-user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
  constructor(public shareService: ShareUserService, private route: Router) {}
  data = {
    email: '',
    password: '',
  };
  datatoken: any;
  login() {
    this.shareService.checkUser('user/login', this.data).subscribe(
      (checkUser) => {
        this.datatoken = checkUser;
        this.shareService.saveToken(this.datatoken.mytoken);
        this.shareService.testLog = true;
        this.datatoken = '';
        this.data = {
          email: '',
          password: '',
        };
        this.route.navigate(['/cCamp']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
