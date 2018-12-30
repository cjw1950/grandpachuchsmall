import { Component, OnInit } from '@angular/core';
import { BakerytinsService } from '../../services/bakerytins.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {
  public prodName: any;
  public term;
  constructor(private _service: BakerytinsService) {}

  ngOnInit() {
    this._service.getService().subscribe(res => {
      this.prodName = res;
    });
  }
}
