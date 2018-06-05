import { WordRepositoryModule } from './word-repository.module';

describe('WordRepositoryModule', () => {
  let wordRepositoryModule: WordRepositoryModule;

  beforeEach(() => {
    wordRepositoryModule = new WordRepositoryModule();
  });

  it('should create an instance', () => {
    expect(wordRepositoryModule).toBeTruthy();
  });
});
