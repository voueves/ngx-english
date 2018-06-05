import { Injectable } from '@angular/core';
import { WordRepositoryModule } from './word-repository.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: WordRepositoryModule
})
export class WordRepositoryService {

  constructor(private http: HttpClient) { }

  // word(word: string): void {
  //   this.http.post('https://translation.googleapis.com/language/translate/v2', {
  //     'q': 'The Great Pyramid of Giza (also known as the Pyramid of Khufu or the',
  //     'source': 'en',
  //     'target': 'es',
  //     'format': 'text'
  //   }).subscribe(data => console.log(data));
  // }

  all(): string[] {
    return [
      'apple',
      'kiwi',
      'orange'
    ];
  }
}
