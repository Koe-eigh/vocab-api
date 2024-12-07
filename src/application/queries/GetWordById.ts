import { WordRepositoryInterface } from "../../domain/repositories/WordRepositoryInterface";
import { DIContainer } from "../../lib/dependencies-injection/DIContainer";
import { Word } from "../../domain/entities/Word";
export class GetWordById {
  private wordRepository: WordRepositoryInterface;

  constructor() {
    const container = DIContainer.getInstance();
    this.wordRepository = container.resolve<WordRepositoryInterface>('WordRepositoryInterface');
  }

  /**
   * 指定されたidの単語を取得する
   * @param id 
   * @returns Word | null
   */
  async execute(id: number): Promise<Word | null> {
    return this.wordRepository.findById(id) ?? null;
  }
}
