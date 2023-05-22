import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TextToSpeechService } from '../services/text-to-speech.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mode: string = 'Game';

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

  questions: any = [
    {
      question: "What color is this?",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2500px-Solid_blue.svg.png",
      rightAnswer: "Blue",
      options: [
        "Blue",
        "Red",
        "Green",
        "Yellow"
      ]
    },
    {
      question: "What color is this?",
      img: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
      rightAnswer: "Red",
      options: [
        "Blue",
        "Red",
        "Green",
        "Yellow"
      ]
    },
    {
      question: "What is this called?",
      img: "https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=lA8UuoHt",
      rightAnswer: "Dog",
      options: [
        "Cat",
        "Dog",
        "Car",
        "Friend"
      ]
    },
    {
      question: "What is this called?",
      img: "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top",
      rightAnswer: "Cat",
      options: [
        "Dog",
        "Car",
        "Cat",
        "Friend"
      ]
    },
  ]
  currentQuestion: any;

  stage: number = 1
  maxStages: number = 3;
  rightAnswers: number = 0

  constructor(private toastController: ToastController, private alertController: AlertController, private textToSpeechService: TextToSpeechService) {
    this.sort();
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Resultados',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  sort() {
    this.currentQuestion = this.questions[Math.floor((Math.random() * this.questions.length))]
  }

  checkAnswer(answer: string) {
    if (answer === this.currentQuestion.rightAnswer) {
      this.rightAnswers += 1;
      this.presentToast('You got it right! Congratulations', 'bottom');
    } else {
      this.presentToast(`You tried! The answer was ${this.currentQuestion.rightAnswer}!`, 'bottom');
    }
    this.stage += 1;
    if (this.stage > this.maxStages) {
      this.presentAlert(`${this.rightAnswers <= 1 ? 'Tente novamente...' : (this.rightAnswers == 2 ? 'Você foi bem!' : 'Excelente! Você acertou todas.')} Respostas corretas: ${this.rightAnswers}`);
      this.stage = 1
      this.maxStages = 3;
      this.rightAnswers = 0;
    }
    this.sort();
  }

  pronounceWord(word: string, voice: number) {
    this.textToSpeechService.speak(word, voice);
  }

}
