import express from "express";

import { WordRepositoryInterface } from "../domain/repositories/WordRepositoryInterface";
import { WordRepository } from "../infrastructure/db/repositories/WordRepository";
import { DIContainer } from "../lib/dependencies-injection/DIContainer";

import words from './routes/words';

export class AppServer {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.injectDependencies();
    this.setupRoutes();
  }

  public injectDependencies() {
    const container = DIContainer.getInstance();
    container.register<WordRepositoryInterface>('WordRepositoryInterface', WordRepository);
  }

  public setupRoutes() {
    this.app.use('/words', words)
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
