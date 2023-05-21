import { Injectable } from '@angular/core';

interface RecommendedVoices {
  [key: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  public sayCommand: string;
  public recommendedVoices: RecommendedVoices;
  public rates: number[];
  public selectedRate: number;
  public selectedVoice: SpeechSynthesisVoice | null;
  public text: string;
  public voices: SpeechSynthesisVoice[];

  // I initialize the app component.
  constructor() {

    this.voices = [];
    this.rates = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2];
    this.selectedVoice = null;
    this.selectedRate = 1;
    // Dirty Dancing for the win!
    this.text = "...";
    this.sayCommand = "";

    // These are "recommended" in so much as that these are the voices that I (Ben)
    // could understand most clearly.
    this.recommendedVoices = Object.create(null);
    this.recommendedVoices["Alex"] = true;
    this.recommendedVoices["Alva"] = true;
    this.recommendedVoices["Damayanti"] = true;
    this.recommendedVoices["Daniel"] = true;
    this.recommendedVoices["Fiona"] = true;
    this.recommendedVoices["Fred"] = true;
    this.recommendedVoices["Karen"] = true;
    this.recommendedVoices["Mei-Jia"] = true;
    this.recommendedVoices["Melina"] = true;
    this.recommendedVoices["Moira"] = true;
    this.recommendedVoices["Rishi"] = true;
    this.recommendedVoices["Samantha"] = true;
    this.recommendedVoices["Tessa"] = true;
    this.recommendedVoices["Veena"] = true;
    this.recommendedVoices["Victoria"] = true;
    this.recommendedVoices["Yuri"] = true;

  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I demo the currently-selected voice.
  public demoSelectedVoice(): void {

    if (!this.selectedVoice) {

      console.warn("Expected a voice, but none was selected.");
      return;

    }

    var demoText = "Best wishes and warmest regards.";

    this.stop();
    this.synthesizeSpeechFromText(this.selectedVoice, this.selectedRate, demoText);

  }


  // I get called once after the inputs have been bound for the first time.
  init(): void {

    this.voices = speechSynthesis.getVoices();
    this.selectedVoice = (this.voices[4] || null);
    this.updateSayCommand();

    // The voices aren't immediately available (or so it seems). As such, if no
    // voices came back, let's assume they haven't loaded yet and we need to wait for
    // the "voiceschanged" event to fire before we can access them.

    setTimeout(() => {
      console.log(this.voices)
    }, 3000)

    if (!this.voices.length) {

      speechSynthesis.addEventListener(
        "voiceschanged",
        () => {

          this.voices = speechSynthesis.getVoices();
          this.selectedVoice = (this.voices[0] || null);
          this.updateSayCommand();

        }
      );

    }

  }


  // I synthesize speech from the current text for the currently-selected voice.
  public speak(text: string, voiceIndex: number = 4): void {
    if (text) {
      this.text = text;
    }

    this.selectedVoice = (this.voices[voiceIndex] || null);

    if (!this.selectedVoice || !this.text) {
      return;
    }

    this.stop();
    this.synthesizeSpeechFromText(this.selectedVoice, this.selectedRate, this.text);
  }

  // I stop any current speech synthesis.
  public stop(): void {

    if (speechSynthesis.speaking) {

      speechSynthesis.cancel();

    }

  }


  // I update the "say" command that can be used to generate the a sound file from the
  // current speech synthesis configuration.
  public updateSayCommand(): void {

    if (!this.selectedVoice || !this.text) {

      return;

    }

    // With the say command, the rate is the number of words-per-minute. As such, we
    // have to finagle the SpeechSynthesis rate into something roughly equivalent for
    // the terminal-based invocation.
    var sanitizedRate = Math.floor(200 * this.selectedRate);
    var sanitizedText = this.text
      .replace(/[\r\n]/g, " ")
      .replace(/(["'\\\\/])/g, "\\$1")
      ;

    this.sayCommand = `say --voice ${this.selectedVoice.name} --rate ${sanitizedRate} --output-file=demo.aiff "${sanitizedText}"`;

  }

  // ---
  // PRIVATE METHODS.
  // ---

  // I perform the low-level speech synthesis for the given voice, rate, and text.
  private synthesizeSpeechFromText(
    voice: SpeechSynthesisVoice,
    rate: number,
    text: string
  ): void {

    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = this.selectedVoice;
    utterance.rate = rate;

    speechSynthesis.speak(utterance);

  }
}
