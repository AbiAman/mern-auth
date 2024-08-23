import express from "express";
import { test } from "../controller/user.controlller.js";

const router = express.Router();

router.get("/", test);

export default router;
