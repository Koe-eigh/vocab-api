import express from "express";
import { GetVocabsAction } from "../actions/vocab/GetVocabsAction";
import { GetVocabAction } from "../actions/vocab/GetVocabAction";

const router = express.Router();

router.get("/", GetVocabsAction);
router.get("/:id", GetVocabAction);

export default router;
