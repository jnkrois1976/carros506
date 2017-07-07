import { Component, OnInit } from '@angular/core';
import { CarmakesService } from "app/services/carmakes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarmakesService]
})
export class HomeComponent implements OnInit {

	models = [];

  constructor(private _makesService: CarmakesService) { }

  ngOnInit() {
	this._makesService.getModelData()
	.subscribe(resModelData => this.models = resModelData);
  }

}
