import express from "express";

import vocabs from "./app/http/routes/vocabs";

import { DIContainer } from "./app/DI/DIContainer";
import { IGetVocabsQuery } from "./core/vocabs/queries/IGetVocabsQuery";
import { GetVocabsQuery } from "./app/adapters/vocabs/queries/GetVocabsQuery";
import { IGetVocabQuery } from "./core/vocabs/queries/IGetVocabQuery";
import { GetVocabQuery } from "./app/adapters/vocabs/queries/GetVocabQuery";

const PORT: number = Number(process.env.PORT) || 3000;

const app = express();

try {
  DIContainer.register<IGetVocabsQuery>("IGetVocabsQuery", GetVocabsQuery);
  DIContainer.register<IGetVocabQuery>("IGetVocabQuery", GetVocabQuery);
} catch (e) {
  console.error("Server cannot start properly because of DI problems");
  process.exit();
}

app.use("/vocabs", vocabs);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
