import { Component } from '@angular/core';
import { WordRepositoryService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private wordRepositoryService: WordRepositoryService
  ) {
    console.log(this.wordRepositoryService.all());
    // this.wordRepositoryService.word('sleep');
  }
}
