import express from 'express';
import { LinkedInConnectionController } from './linkedinConnection.controller';

const router = express.Router();

router.post('/', LinkedInConnectionController.createLinkedInConnection);
router.get('/', LinkedInConnectionController.getAllLinkedInConnections);
router.get('/check-pending', LinkedInConnectionController.checkPendingConnections);
router.post('/:id/send-dm', LinkedInConnectionController.sendDM);
router.post('/:id/start-outreach', LinkedInConnectionController.startOutreach);
router.get('/:id', LinkedInConnectionController.getSingleLinkedInConnection);
router.put('/:id', LinkedInConnectionController.updateLinkedInConnection);
router.delete('/:id', LinkedInConnectionController.deleteLinkedInConnection);

export const LinkedInConnectionRoutes = router;
