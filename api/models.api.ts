import { Router } from "express";

const router = Router();

router.get("/models", async (req, res) => {
  res.json([
    {
      id: "llama-3",
      provider: "community"
    },
    {
      id: "mistral-7b",
      provider: "community"
    },
    {
      id: "n0dex-chat",
      provider: "n0dex"
    }
  ]);
});

export default router;
