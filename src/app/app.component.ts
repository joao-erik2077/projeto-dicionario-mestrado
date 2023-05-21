import { Component } from '@angular/core';
import { TextToSpeechService } from './services/text-to-speech.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private textToSpeechService: TextToSpeechService) {
    this.textToSpeechService.init();
  }
}
