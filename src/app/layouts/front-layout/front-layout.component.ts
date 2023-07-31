import { Component } from '@angular/core';
import { ShareUserService } from 'src/app/services/share-user.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css'],
})
export class FrontLayoutComponent {
  constructor(public sh: ShareUserService) {}
}
