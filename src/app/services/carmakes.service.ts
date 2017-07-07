import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CarmakesService {
	private _url: string = 'http://carros506.local/api/api/get';
	constructor(private _http: Http){}
	getModelData(){
		return this._http.get(this._url)
			.map((response:Response) => response.json());
	}

}
