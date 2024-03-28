import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './layout/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';

@NgModule({
  declarations: [
    MainComponent,
    SideMenuComponent,
    HeaderComponent,
    ProfileComponent,
    AddProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule
  ]
})
export class MainModule { }
