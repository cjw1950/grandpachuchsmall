import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { FormsModule} from '@angular/forms';

import { TeaEquipmentService } from '../services/tea-equipment.service';
import { RestaurantEquipmentService } from '../services/restaurant-equipment.service';
import { JuicetanksService } from '../services/juicetanks.service';
import { BakerytinsService } from '../services/bakerytins.service';
import { PhonesService } from '../services/phones.service';
import { SportparaService } from '../services/sportpara.service';
import { SportsService  } from '../services/sports.service';
import { SportwomanService  } from '../services/sportwoman.service';
import { WineService  } from '../services/wine.service';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BakeryComponent } from './bakery/bakery.component';
import { JuiceComponent } from './juice/juice.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TeaEquipmntComponent } from './tea-equipmnt/tea-equipmnt.component';
import { FilterPipe } from './filter.pipe';
import { WineComponent } from './wine/wine.component';
import { SportparaComponent } from './sportpara/sportpara.component';
import { SportwomanComponent } from './sportwoman/sportwoman.component';
import { SportsComponent } from './sports/sports.component';
import { PhonesComponent } from './phones/phones.component';

@NgModule({
  declarations: [
    AppComponent,
    BakeryComponent,
    JuiceComponent,
    RestaurantComponent,
    TeaEquipmntComponent,
    routingComponents,
    FilterPipe,
    WineComponent,
    SportparaComponent,
    SportwomanComponent,
    SportsComponent,
    PhonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpModule,
    FormsModule

  ],
  providers: [TeaEquipmentService , RestaurantEquipmentService , JuicetanksService , BakerytinsService,PhonesService ,  SportparaService ,  SportsService  ,  SportwomanService,  WineService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
