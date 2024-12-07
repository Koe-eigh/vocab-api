import { WordRepositoryInterface } from "../../domain/repositories/WordRepositoryInterface";
import { DIContainer } from "../../lib/dependencies-injection/DIContainer";
import { Word } from "../../domain/entities/Word";

export class GetWords {
  private wordRepository: WordRepositoryInterface;

  constructor() {
    const container = DIContainer.getInstance();
    this.wordRepository = container.resolve<WordRepositoryInterface>('WordRepositoryInterface');
  }

  /**
   * 全ての単語を取得する
   * @returns Word[]
   */
  async execute(): Promise<Word[]> {
    return this.wordRepository.findAll();
  }
}
