import { Component, OnInit } from '@angular/core';
import { WineService } from '../../services/wine.service';


@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  public prodName: any;
  public term;
  constructor(private _service: WineService   ) { }

  ngOnInit() {
    this._service.getService().subscribe(res => {
      this.prodName = res;
    });
  }

}
