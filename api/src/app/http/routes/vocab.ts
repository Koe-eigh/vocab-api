import express from "express";
import { GetVocabsAction } from "../actions/vocabs/GetVocabsAction";
import { GetVocabAction } from "../actions/vocabs/GetVocabAction";

const router = express.Router();

router.get("/", GetVocabsAction);
router.get("/:id", GetVocabAction);

export default router;
