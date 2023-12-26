import express from "express";
import { getstring } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/string").get(getstring);

export default router;
