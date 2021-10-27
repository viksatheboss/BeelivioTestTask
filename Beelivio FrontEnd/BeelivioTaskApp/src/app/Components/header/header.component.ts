import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { IdentityService } from 'src/app/Services/identity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarService:NbSidebarService,
    private identityService:IdentityService) { }

   
  authToken = "Нема најавен корисник";

  ngOnInit(): void {


    let temp = localStorage.getItem("AuthToken");

    if (temp !== null && temp !== undefined)
      this.authToken = temp;

  }

  logOut(){
    this.identityService.logOut()
  }
  toggle() {
    this.sidebarService.toggle(true, 'left');
  }

}
