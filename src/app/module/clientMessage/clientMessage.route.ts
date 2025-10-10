import express from 'express';
import { ClientMessageController } from './clientMessage.controller';

const router = express.Router();

router.post('/', ClientMessageController.createClientMessage);
router.get('/', ClientMessageController.getAllClientMessages);
router.patch('/:id/status', ClientMessageController.updateMessageStatus);
router.delete('/:id', ClientMessageController.deleteClientMessage);

export const ClientMessageRoutes = router;
