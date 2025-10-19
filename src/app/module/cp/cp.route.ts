import express from 'express';
import { CPController } from './cp.controller';

const router = express.Router();

router.post('/', CPController.createCP);
router.get('/', CPController.getAllCP);
router.get('/:id', CPController.getSingleCP);
router.put('/:id', CPController.updateCP);
router.delete('/:id', CPController.deleteCP);

export const CPRoutes = router;
