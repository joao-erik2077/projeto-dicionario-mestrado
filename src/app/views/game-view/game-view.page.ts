import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.page.html',
  styleUrls: ['./game-view.page.scss'],
})
export class GameViewPage implements OnInit {

  data: any[] | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private textToSpeechService: TextToSpeechService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.data = this.dataService.getSpecificFromId('games', parseInt(id));
  }

  pronounceWord(word: string, voice: number) {
    this.textToSpeechService.speak(word, voice);
  }

  returnToPage() {
    this.router.navigateByUrl('tabs/games')
  }

}
