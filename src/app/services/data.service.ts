import { Injectable } from '@angular/core';
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
    }
  ];

  private gamesData = [];

  private storybookData = [];

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
