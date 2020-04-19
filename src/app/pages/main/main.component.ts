import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imgUrl: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.imgUrl = this.authService.user.photoURL;
  }

  handleLogOut() {
    this.authService.logout();
  }
}
