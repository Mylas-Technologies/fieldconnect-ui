import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
 sideMenuItems:any = [];
  constructor() { }

  ngOnInit(): void {
    this.sideMenuItems = sideMenu
  }

}
const sideMenu = [
  {
    icon: 'dashboard_outline',
    name: 'Dashboard',
    path: 'dashboard', 
  },
  {
    icon: 'mail',
    name: 'Messages',
    path: 'messages', 
  },
  {
    icon: 'person',
    name: 'Profile',
    path: 'profile', 
  },
]