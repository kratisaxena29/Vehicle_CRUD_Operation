import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check if the server is running
 *     responses:
 *       200:
 *         description: Server is up and running
 */
router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is running 🚀' });
});

export default router;
