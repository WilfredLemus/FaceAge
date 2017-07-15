import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FaceAge';
  imageUrl: string;
  personData: any = {};
  personDataJ: any;

  constructor(private data: DataService) {
    this.imageUrl = '';
  }


  getPersonAge() {
    console.log("INICIO");

    this.data.getPersonAge(this.imageUrl)
    .subscribe(data => {
      this.personData = data
    }, erro => console.log(erro),
    () => {
      console.log("FINALIZO");
      // this.personData = JSON.stringify(this.personData);
      console.log(this.personData);
      console.log(this.personData[0].faceRectangle.top);
    }
    );
  }

}
