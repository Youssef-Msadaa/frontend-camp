import { Component } from '@angular/core';
import { ShareUserService } from 'src/app/services/share-user.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css'],
})
export class AllDataComponent {
  constructor(public shareData: ShareUserService) {}
  Users: any[] = [];
  ngOnInit() {
    this.shareData.getAllUsers('user/all').subscribe((users) => {
      this.Users.push(users);
      console.log(this.Users);
    });
  }
}
