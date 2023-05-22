import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { StoryBookData, StoryBookImages } from 'src/app/interfaces/StoryBookData';
import { DataService } from 'src/app/services/data.service';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';

@Component({
  selector: 'app-storybook-view',
  templateUrl: './storybook-view.page.html',
  styleUrls: ['./storybook-view.page.scss'],
})
export class StorybookViewPage implements OnInit {

  images: StoryBookImages[] | any;
  currentScene: StoryBookImages | any;
  scripts: string[] | undefined;

  title?: string;
  id: number = 0;

  progress: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private textToSpeechService: TextToSpeechService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    const parsed = this.dataService.getSpecificFromId('storybook', parseInt(id));
    if (parsed) {
      this.title = parsed.title;
      this.images = parsed.images;
      const firstScene = this.images[0]
      if (!firstScene) return;
      this.currentScene = firstScene;
      this.scripts = this.currentScene.scripts;
    }
  }

  jumpToPrevious() {
    this.id -= 1
    if (this.id < 0) {
      this.id = this.images.length - 1;
    };
    this.currentScene = this.images[this.id];
    this.scripts = this.currentScene.scripts;
    this.progress = this.images.length / this.id + 1;

  }

  jumpToNext() {
    this.id += 1
    if (this.id > this.images.length - 1) {
      this.id = 0;
    };
    this.currentScene = this.images[this.id];
    this.scripts = this.currentScene.scripts;
    this.progress = this.images.length / this.id + 1;
  }

  getFromScript(script: string, id: string) {
    const split = script.split(': ');
    const person = split[0];
    const predicate = split[1];
    if (id == 'predicate') {
      return predicate;
    } else {
      return person;
    }
  }

  people: any = {};
  getColorFor(person: string) {
    if (!this.people[person]) {
      this.people[person] = `hsla(${~~(360 * Math.random())}, 100%,  50%, 1)`;
    }
    return this.people[person];
  }

  pronounceWord(word: string, voice: number) {
    this.textToSpeechService.speak(word, voice);
  }

  returnToPage() {
    this.router.navigateByUrl('tabs/storybook')
  }

}
