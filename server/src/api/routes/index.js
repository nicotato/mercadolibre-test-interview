import items from "./items";
import { Router } from "express";

const router = Router();
router.use("/items", items);

export default router;
