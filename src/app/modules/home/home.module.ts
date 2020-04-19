import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, NotFoundComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ], 
  exports:[
    NotFoundComponent,
    AboutComponent
  ]
})
export class HomeModule { }
