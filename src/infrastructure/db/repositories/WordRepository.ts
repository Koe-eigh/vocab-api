import { WordRepositoryInterface } from "../../../domain/repositories/WordRepositoryInterface";
import { Word } from "../../../domain/entities/Word";

import fs from 'fs';
import path from 'path';

export class WordRepository implements WordRepositoryInterface {
  async findAll(): Promise<Word[]> {
    const rootDir = process.cwd();
    const filePath = path.join(rootDir, 'resources', 'H29_Habatanforstudents.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    return lines
      .filter(line => line.trim() !== '')
      .map(line => {
        let commaPositions = [];
        let searchStartIndex = 0;

        for (let i = 0; i < 4; i++) {
          const pos = line.indexOf(',', searchStartIndex);
          if (pos === -1) break;
          commaPositions.push(pos);
          searchStartIndex = pos + 1;
        }

        const id = line.substring(0, commaPositions[0]);
        const word = line.substring(commaPositions[0] + 1, commaPositions[1]);
        const type = line.substring(commaPositions[1] + 1, commaPositions[2]);
        const meaning = line.substring(commaPositions[2] + 1, commaPositions[3]).replaceAll('"', '');
        const remaining = line.substring(commaPositions[3] + 1);

        const example = remaining.replace(/[\r\n]+/g, ' ').replaceAll('"', '').trim();

        return new Word(parseInt(id.replace(/"/g, '')), word.replace(/"/g, '').trim(), type.replace(/"/g, '').trim(),  meaning.replace(/[\r\n]+/g, '').trim(), example);
      })
  }

  async findById(id: number): Promise<Word | null> {
    // TODO: findAll呼んでるとパフォーマンスが悪いので、idをクエリに込める。
    const words = await this.findAll();
    return words.find(word => word.getId() === id) ?? null;
  }
}
