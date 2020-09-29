import express from "express";
import { items } from "../../controllers";
const router = express.Router();

// Routes
router
  .get("/:id", async (req, res) => {
    if (!req.params.id) res.status(400);
    res.json(await items.getItem(req.params.id));
  })
  .get("/", async (req, res) => {
    if (!req.query.search) res.status(400);
    res.json(
      await items.getSearch({
        search: req.query.search,
        limit: 4,
      })
    );
  });
export default router;
