import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  jogos: any = [
    {
      name: 'Pick the Color',
      description: 'Escolha a opção correta para o nome de cada cor na linguagem correta!',
    },
    {
      name: 'Pick the Color',
      description: 'Escolha a opção correta para o nome de cada cor na linguagem correta!',
    },
  ];

  constructor() { }

}
