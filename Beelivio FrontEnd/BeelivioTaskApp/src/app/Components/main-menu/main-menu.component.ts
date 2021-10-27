import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private route:Router) { }
  items: NbMenuItem[]=[
    {title:"Product", link:"/listProduct"},
    {title:"Producer", link:"/listProducer"}
  ]
  ngOnInit(): void {
  }

}
