import { Router } from "express";

const router = Router();

router.post("/jobs", async (req, res) => {
  const { task } = req.body;

  res.json({
    jobId: "JOB-001",
    task,
    status: "queued"
  });
});

router.get("/jobs/:id", async (req, res) => {
  res.json({
    id: req.params.id,
    status: "completed"
  });
});

export default router;
