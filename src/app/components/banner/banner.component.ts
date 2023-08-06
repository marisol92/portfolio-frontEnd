import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  user: user = new user("", "", "");
  name: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => (this.user = data))
  }
}