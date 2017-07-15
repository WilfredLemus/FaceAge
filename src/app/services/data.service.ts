import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class DataService {

  private url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender';

  constructor(private http: Http) { }

  getPersonAge(imageUrl: string) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.apiKeyMicrosoft
    });
    const options = new RequestOptions({ headers });

    return this.http.post(this.url,  {url: imageUrl}, options)
      .map(data => data.json());
      // .do(result => console.log(result));
  }

}
