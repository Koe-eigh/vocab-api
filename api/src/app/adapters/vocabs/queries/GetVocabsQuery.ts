import { IGetVocabsQuery } from "../../../../core/vocabs/queries/IGetVocabsQuery";
import { GetVocabsInputPort } from "../../../../core/vocabs/queries/inputs/GetVocabsInputPort";
import { VocabReadModel } from "../../../../core/vocabs/queries/readModels/VocabReadModel";

import fs from "fs";
import path from "path";

export class GetVocabsQuery implements IGetVocabsQuery {
  async execute(input: GetVocabsInputPort): Promise<VocabReadModel[]> {
    const rootDir = process.cwd();
    const filePath = path.join(
      rootDir,
      "resources",
      "H29_Habatanforstudents.csv"
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const lines = fileContent.split("\n");
    return lines
      .filter((line) => line.trim() !== "")
      .map((line) => {
        let commaPositions = [];
        let searchStartIndex = 0;

        for (let i = 0; i < 4; i++) {
          const pos = line.indexOf(",", searchStartIndex);
          if (pos === -1) break;
          commaPositions.push(pos);
          searchStartIndex = pos + 1;
        }

        const id = line.substring(0, commaPositions[0]);
        const word = line.substring(commaPositions[0] + 1, commaPositions[1]);
        const types = line.substring(commaPositions[1] + 1, commaPositions[2]);
        const meanings = line
          .substring(commaPositions[2] + 1, commaPositions[3])
          .replaceAll('"', "");
        const remaining = line.substring(commaPositions[3] + 1);

        const examples = remaining
          .replace(/[\r\n]+/g, " ")
          .replaceAll('"', "")
          .trim();

        return new VocabReadModel(
          parseInt(id.replace(/"/g, "")),
          word.replace(/"/g, "").trim(),
          types.replace(/"/g, "").trim(),
          meanings.replace(/[\r\n]+/g, "").trim(),
          examples
        );
      });
  }
}
