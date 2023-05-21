import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public data = [
    {
      descriptionAlt: 'Pessoa falando com outra pessoa',
      imageSrc: 'https://ionicframework.com/docs/img/demos/card-media.png',
    }
  ];

  constructor() { }

}
