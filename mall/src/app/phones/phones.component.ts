import { Component, OnInit } from '@angular/core';

import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  public prodName: any;
  public term;

  constructor(private _service: PhonesService) {}


  ngOnInit() {
    this._service.getService().subscribe(res => {
      this.prodName = res;
    });
  }

}
