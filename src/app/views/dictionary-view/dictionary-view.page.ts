import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordData } from 'src/app/interfaces/WordData';
import { DataService } from 'src/app/services/data.service';
import { TextToSpeechService } from './../../services/text-to-speech.service';

@Component({
  selector: 'app-dictionary-view',
  templateUrl: './dictionary-view.page.html',
  styleUrls: ['./dictionary-view.page.scss'],
})
export class DictionaryViewPage implements OnInit {

  data: WordData | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private textToSpeechService: TextToSpeechService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.data = this.dataService.getSpecificFromId('dictionary', parseInt(id));
  }

  pronounceWord(word: string, voice: number) {
    this.textToSpeechService.speak(word, voice);
  }

  returnToPage() {
    this.router.navigateByUrl('tabs/dictionary')
  }

}
