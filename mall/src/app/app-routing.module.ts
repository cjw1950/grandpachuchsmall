import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BakeryComponent } from './bakery/bakery.component';
import { JuiceComponent } from './juice/juice.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TeaEquipmntComponent } from './tea-equipmnt/tea-equipmnt.component';

import { PhonesComponent } from './phones/phones.component';
import { SportparaComponent } from './sportpara/sportpara.component';
import { SportsComponent } from './sports/sports.component';
import { SportwomanComponent } from './sportwoman/sportwoman.component';
import {WineComponent } from './wine/wine.component';


const routes: Routes = [
  {path: 'bakery', component: BakeryComponent},
  {path: 'juice', component: JuiceComponent},
  {path: 'restaurant', component: RestaurantComponent },
  {path: 'tea', component: TeaEquipmntComponent},
  {path: 'phones', component: PhonesComponent },
  {path: 'para', component: SportparaComponent  },
  {path: 'sports', component: SportsComponent },
  {path: 'women', component: SportwomanComponent },
  {path: 'wine', component: WineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ BakeryComponent , JuiceComponent ,  RestaurantComponent , TeaEquipmntComponent ,
  PhonesComponent , SportparaComponent ,  SportsComponent ,  SportwomanComponent ,  WineComponent ];

