import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WordData } from '../interfaces/WordData';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public data: WordData[] = [];
  public results: WordData[] = [];

  public status: string = 'Todas as palavras';

  constructor(private dataService: DataService, private route: Router) {
    this.data = this.dataService.getAll('dictionary');
    this.results = [...this.data];
  }

  handleInput(event: any): void {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d: any) => d.word.toLowerCase().indexOf(query) > -1 || d.definition.toLowerCase().indexOf(query) > -1);
    if (this.results.length == this.data.length) {
      this.status = 'Todas as palavras';
    } else {
      this.status = `Resultados (${this.results.length})`;
    }
  }

  openView(index: number) {
    this.route.navigate(['tabs/dictionary', index]);
  }

}
