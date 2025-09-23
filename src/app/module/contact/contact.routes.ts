import express from 'express';
import { contactController } from './contact.controller';

const route = express.Router();

// Contact Messages Routes
route.post('/', contactController.createContact);
route.get('/', contactController.getAllContacts);
route.get('/status/:status', contactController.getContactsByStatus);
route.get('/:id', contactController.getContactById);
route.put('/:id', contactController.updateContact);
route.delete('/:id', contactController.deleteContact);
route.patch('/:id/read', contactController.markAsRead);
route.patch('/:id/replied', contactController.markAsReplied);
route.patch('/:id/archive', contactController.archiveContact);

// Contact Info Routes
route.post('/info', contactController.createContactInfo);
route.get('/info/details', contactController.getContactInfo);
route.put('/info/:id', contactController.updateContactInfo);

export const contactRoute = route;
