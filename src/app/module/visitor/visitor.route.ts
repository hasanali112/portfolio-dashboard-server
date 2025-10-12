import { Router } from 'express';
import { VisitorController } from './visitor.controller';

const router = Router();

router.post('/track', VisitorController.trackVisitor);
router.get('/stats', VisitorController.getVisitorStats);
router.get('/recent', VisitorController.getRecentVisitors);
router.get('/by-country', VisitorController.getVisitorsByCountry);
router.delete('/:id', VisitorController.deleteVisitor);
router.delete('/', VisitorController.deleteAllVisitors);

export const VisitorRoutes = router;
