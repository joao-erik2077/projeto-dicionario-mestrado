import { Injectable } from '@angular/core';
import { StoryBookData } from '../interfaces/StoryBookData';
import { WordData } from '../interfaces/WordData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dictionaryData: WordData[] = [
    {
      id: 0,
      word: "Língua Franca",
      definition: "English as a Frank Language",
      description: "A simplified form of English used as a common language for communication between people of different native languages.",
      etymology: "The term 'Língua Franca' originates from the historical Mediterranean Lingua Franca, which was a hybrid language combining Italian, French, Greek, Arabic, and other languages."
    },
    {
      id: 1,
      word: "Flantricate",
      definition: "To intricately arrange or organize",
      description: "The process of carefully arranging or organizing something in a complex and detailed manner.",
      etymology: "A combination of the words 'Frank' and 'intricate', representing the meticulousness often associated with the Língua Franca."
    },
    {
      id: 2,
      word: "Quivert",
      definition: "To shake or tremble with excitement",
      description: "To experience a strong feeling of anticipation or enthusiasm that causes slight trembling or shaking.",
      etymology: "Derived from the word 'quiver', meaning to shake or tremble."
    },
    {
      id: 3,
      word: "Frankenize",
      definition: "To combine or merge elements from different sources",
      description: "The act of taking components or ideas from various origins and combining them to create something new or hybrid.",
      etymology: "A blend of the words 'Frank' and 'synthesize', reflecting the process of synthesizing or blending diverse elements."
    },
    {
      id: 4,
      word: "Whirlfrank",
      definition: "To spin or rotate rapidly",
      description: "To move or rotate with high speed in a circular or spinning motion.",
      etymology: "A playful combination of the words 'whirl' and 'Frank', suggesting a lively and dynamic movement."
    },
    {
      id: 5,
      word: "Franklusion",
      definition: "The state of being transparent and honest",
      description: "The act of openly expressing thoughts, feelings, or information without concealment or deception.",
      etymology: "A fusion of the words 'Frank' and 'illusion', highlighting the contrast between genuine transparency and deceptive illusions."
    },
    {
      id: 6,
      word: "Frankalize",
      definition: "To simplify or make straightforward",
      description: "The process of making something less complex or convoluted, allowing for clearer understanding or communication.",
      etymology: "A combination of the words 'Frank' and 'analyze', indicating the act of breaking down and simplifying information or concepts."
    },
    {
      id: 7,
      word: "Frankulous",
      definition: "Characterized by honesty and openness",
      description: "Describing a person, behavior, or communication that is marked by sincerity, candor, and straightforwardness.",
      etymology: "A blend of the words 'Frank' and 'fabulous', emphasizing the positive qualities associated with honesty and openness."
    },
    {
      id: 8,
      word: "Frankophony",
      definition: "The collective use of the Frank Language",
      description: "The phenomenon of people from diverse linguistic backgrounds using the Frank Language to facilitate communication and understanding.",
      etymology: "A combination of the words 'Frank' and 'phono', derived from the Greek word for 'voice' or 'sound', representing the spoken aspect of language."
    },
    {
      id: 9,
      word: "Frankticipation",
      definition: "The excited anticipation of something forthcoming",
      description: "The state of eagerly looking forward to an event, outcome, or experience with enthusiasm and excitement.",
      etymology: "A blend of the words 'Frank' and 'anticipation', emphasizing the genuine and enthusiastic nature of the anticipation."
    },
    {
      id: 10,
      word: "Frankventure",
      definition: "An exciting and daring journey or undertaking",
      description: "A thrilling and bold expedition or pursuit that involves taking risks and exploring new experiences.",
      etymology: "A combination of the words 'Frank' and 'adventure', highlighting the adventurous and courageous nature of the endeavor."
    },
    {
      id: 11,
      word: "Frankify",
      definition: "To make something more authentic or genuine",
      description: "The act of enhancing or imbuing something with a sense of truthfulness, sincerity, or genuineness.",
      etymology: "Derived from the word 'Frank' with the suffix '-ify', indicating the process of making something more characteristic of the Frank Language."
    },
    {
      id: 12,
      word: "Frankception",
      definition: "The state of layers or levels of openness",
      description: "A concept or situation characterized by multiple levels or layers of transparency, openness, or frankness.",
      etymology: "A blend of the words 'Frank' and 'inception', alluding to the idea of nested or intertwined levels of honesty or openness."
    },
    {
      id: 13,
      word: "Frankonomics",
      definition: "The study or practice of honest and transparent economic principles",
      description: "The field of study or application of economic theories and practices that prioritize openness, integrity, and fairness.",
      etymology: "A combination of the words 'Frank' and 'economics', highlighting the emphasis on honest and transparent economic systems."
    },
    {
      id: 14,
      word: "Frankquilibrium",
      definition: "A state of balance or harmony achieved through honesty and openness",
      description: "The condition or state of being in a balanced and harmonious state, resulting from the sincere and transparent interaction of individuals or systems.",
      etymology: "A fusion of the words 'Frank' and 'equilibrium', suggesting a balance achieved through genuine communication and understanding."
    },
    {
      id: 15,
      word: "Frankocracy",
      definition: "A system of governance characterized by transparency and open decision-making",
      description: "A political system or structure in which power is exercised with honesty, accountability, and inclusiveness.",
      etymology: "A combination of the words 'Frank' and 'democracy', highlighting the emphasis on open and transparent governance."
    },
    {
      id: 16,
      word: "Frankology",
      definition: "The study of frankness and its impact on communication and relationships",
      description: "An academic discipline that explores the nature of openness, sincerity, and honesty in interpersonal interactions and their effects.",
      etymology: "Derived from the word 'Frank' with the suffix '-ology', indicating the field of study related to frankness and its implications."
    },
    {
      id: 17,
      word: "Franktelligence",
      definition: "The ability to communicate and understand with honesty and openness",
      description: "The capacity to engage in genuine and transparent communication, leading to effective understanding and meaningful connections.",
      etymology: "A blend of the words 'Frank' and 'intelligence', emphasizing the importance of honest and open communication in fostering intelligence and understanding."
    }
  ];

  private gamesData = [];

  private storybookData: StoryBookData[] = [
    {
      id: 0,
      title: 'Juan plays with Antonio',
      description: 'In a sunny day, Juan and Antonio decide to play.',
      images: [
        {
          src: 'https://thumbs.dreamstime.com/b/o-livro-de-hist%C3%B3rias-verde-das-crian%C3%A7as-que-jogam-com-drag%C3%A3o-perto-do-rio-ilustra%C3%A7%C3%A3o-151128825.jpg',
          descriptionAlt: 'Juan and Antonio playing.',
          scripts: [
            "Juan: Truth!",
            "Antonio: Lie!",
          ]
        },
        {
          src: 'https://static.vecteezy.com/system/resources/previews/000/373/906/original/storybook-with-knight-and-dragon-vector.jpg',
          descriptionAlt: 'Juan and Antonio decided something!',
          scripts: [
            "Juan: Ok, maybe you're right Antonio.",
            "Antonio: Yay!",
          ]
        },

      ]
    }
  ];

  constructor() { }

  // Util
  private getByAllId(id: string) {
    let data;
    if (id == 'dictionary') {
      data = this.dictionaryData;
    } else if (id == 'games') {
      data = this.gamesData;
    } else if (id == 'storybook') {
      data = this.storybookData;
    }
    return data;
  }

  public getAll(id: string): any {
    return this.getByAllId(id);
  }

  public getSpecificFromId(id: string, index: number): any {
    const all = this.getByAllId(id);
    if (!all) return;
    return all[index];
  }
}
