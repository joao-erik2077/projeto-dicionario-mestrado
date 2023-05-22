import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { StoryBookData } from '../interfaces/StoryBookData';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public data: StoryBookData[] = [];

  public shown: StoryBookData[] = [];
  public results: StoryBookData[] = [];

  public status: string = 'Todas as histórias';

  toLoad: number = 15;
  query?: string;

  constructor(private dataService: DataService, private route: Router) {
    this.data = this.dataService.getAll('storybook');
    for (let i = 0; i < this.toLoad; i++) {
      const data = this.data[i];
      if (!data) break;
      this.shown.push(data);
    }
    this.results = [...this.shown];
  }

  filterResults() {
    this.results = this.data.filter((d: any) => d.title.toLowerCase().indexOf(this.query) > -1);
    if (this.results.length == this.data.length) {
      this.status = 'Todas as histórias';
    } else {
      this.status = `Resultados (${this.results.length})`;
    }
  }

  handleInput(event: any): void {
    this.query = event.target.value.toLowerCase();
    this.filterResults()
  }

  private clamp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max);
  }

  private generateItems() {
    const count = this.shown.length - 1;
    for (let i = count; i < this.clamp(count + this.toLoad, 0, this.data.length - 1); i++) {
      const data = this.data[i];
      if (!data) {
        return;
      }
      this.shown.push(this.data[i]);
      if (!this.query || this.query == '') {
        this.results.push(this.data[i]);
      } else {
        this.filterResults();
      }
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  openView(index: number) {
    this.route.navigate(['tabs/storybook', index]);
  }
}
