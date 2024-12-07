import { Word } from "../entities/Word";

export interface WordRepositoryInterface {
  findAll(): Promise<Word[]>;
  findById(id: number): Promise<Word | null>;
}
