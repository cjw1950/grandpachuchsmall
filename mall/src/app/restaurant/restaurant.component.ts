import { Component, OnInit } from '@angular/core';
import { RestaurantEquipmentService } from '../../services/restaurant-equipment.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public prodName: any;
  public term: string;
  constructor(private _service: RestaurantEquipmentService ) { }

  ngOnInit() {
      this._service.getService().subscribe(res => {
      this.prodName = res;
    });



  }

}
