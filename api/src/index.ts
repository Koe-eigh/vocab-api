import express from "express";

import vocabs from "./app/http/routes/vocab";

import { DIContainer } from "./app/DI/DIContainer";
import { IGetVocabsQuery } from "./core/vocabs/queries/IGetVocabsQuery";
import { GetVocabsQuery } from "./app/adapters/vocabs/queries/GetVocabsQuery";
import { IGetVocabQuery } from "./core/vocabs/queries/IGetVocabQuery";
import { GetVocabQuery } from "./app/adapters/vocabs/queries/GetVocabQuery";

const PORT: number = Number(process.env.PORT) || 3000;

const app = express();

const container = DIContainer.getInstance();
DIContainer.register<IGetVocabsQuery>("IGetVocabsQuery", GetVocabsQuery);
DIContainer.register<IGetVocabQuery>("IGetVocabQuery", GetVocabQuery);

app.use("/vocabs", vocabs);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
