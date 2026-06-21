import { Router } from "express";

const router = Router();

router.post("/nodes/register", async (req, res) => {
  res.json({
    success: true,
    status: "registered",
    node: req.body
  });
});

router.get("/nodes", async (req, res) => {
  res.json({
    onlineNodes: 128,
    gpuNodes: 48,
    cpuNodes: 80
  });
});

export default router;
