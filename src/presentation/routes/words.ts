import express, { Request, Response } from 'express';
import { GetWords } from '../../application/queries/GetWords';
import { GetWordById } from '../../application/queries/GetWordById';
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const getWords = new GetWords();
  const words = await getWords.execute();
  res.status(200).json(words);
});

router.get("/:id", async (req: Request, res: Response) => {
  const getWordById = new GetWordById();
  const word = await getWordById.execute(parseInt(req.params.id));
  res.status(200).json(word);
});

export default router;
