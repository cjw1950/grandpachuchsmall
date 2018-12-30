import { Component, OnInit } from '@angular/core';
import { SportsService } from '../../services/sports.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  public prodName: any;
  public term;
  constructor(private _service: SportsService) { }

  ngOnInit() {
    this._service.getService().subscribe(res => {
      this.prodName = res;
    });
  }


}
