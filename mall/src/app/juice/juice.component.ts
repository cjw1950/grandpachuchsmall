import { Component, OnInit } from '@angular/core';
import { JuicetanksService } from '../../services/juicetanks.service';
@Component({
  selector: 'app-juice',
  templateUrl: './juice.component.html',
  styleUrls: ['./juice.component.css']
})
export class JuiceComponent implements OnInit {
  public prodName: any;
  public term;
  constructor(private _service: JuicetanksService) { }

  ngOnInit() {
    this._service.getService().subscribe(res => {
      this.prodName = res;
    });


  }

}
