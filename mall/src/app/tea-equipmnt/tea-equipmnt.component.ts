import { Component, OnInit } from '@angular/core';
import { TeaEquipmentService } from '../../services/tea-equipment.service';
@Component({
  selector: 'app-tea-equipmnt',
  templateUrl: './tea-equipmnt.component.html',
  styleUrls: ['./tea-equipmnt.component.css']
})
export class TeaEquipmntComponent implements OnInit {
  public prodName: any;
  constructor(private _service: TeaEquipmentService ) { }

  ngOnInit() {
    this._service.getService().subscribe(res => {
      this.prodName = res;
    });



  }

}
