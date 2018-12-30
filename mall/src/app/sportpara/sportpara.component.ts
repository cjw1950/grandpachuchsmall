import { Component, OnInit } from '@angular/core';
import { SportparaService } from '../../services/sportpara.service';
@Component({
  selector: 'app-sportpara',
  templateUrl: './sportpara.component.html',
  styleUrls: ['./sportpara.component.css']
})
export class SportparaComponent implements OnInit {
  public prodName: any;
  public term;
  constructor(private _service:  SportparaService) { }

  ngOnInit() {
    this._service.getService().subscribe(res => {
      this.prodName = res;
    });
  }


}
