import { Router } from "express";

const router = Router();

router.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  res.json({
    success: true,
    model: "n0dex-chat",
    response: `Response for: ${prompt}`
  });
});

export default router;
