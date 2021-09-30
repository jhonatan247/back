import { Router } from "express";
const router = Router();

import CategoryCtrl from '../controllers/category.controller';

router.get("/:id/:level", CategoryCtrl.getById);

export default router;