import { Component, OnInit } from '@angular/core';
import { SportwomanService } from '../../services/sportwoman.service';

@Component({
  selector: 'app-sportwoman',
  templateUrl: './sportwoman.component.html',
  styleUrls: ['./sportwoman.component.css']
})
export class SportwomanComponent implements OnInit {
  public prodName: any;
  public term;
  constructor( private _service: SportwomanService ) { }

  ngOnInit() {
    this._service.getService().subscribe(res => {
      this.prodName = res;
    });

  }



}



