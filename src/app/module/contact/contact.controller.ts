import { Request, Response } from 'express';
import { contactService } from './contact.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createContact = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.createContact(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: 'Contact message sent successfully! 🎉',
    data: result,
  });
});

const getAllContacts = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.getAllContacts();
  sendResponse(res, {
    statusCode: 200,
    message: 'Contacts retrieved successfully! 🎉',
    data: result,
  });
});

const getContactById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await contactService.getContactById(id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Contact retrieved successfully! 🎉',
    data: result,
  });
});

const updateContact = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await contactService.updateContact(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Contact updated successfully! 🎉',
    data: result,
  });
});

const deleteContact = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await contactService.deleteContact(id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Contact deleted successfully! 🎉',
    data: result,
  });
});

const getContactsByStatus = catchAsync(async (req: Request, res: Response) => {
  const status = req.params.status;
  const result = await contactService.getContactsByStatus(status);
  sendResponse(res, {
    statusCode: 200,
    message: 'Contacts by status retrieved successfully! 🎉',
    data: result,
  });
});

const markAsRead = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await contactService.markAsRead(id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Contact marked as read! 🎉',
    data: result,
  });
});

const markAsReplied = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await contactService.markAsReplied(id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Contact marked as replied! 🎉',
    data: result,
  });
});

const archiveContact = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await contactService.archiveContact(id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Contact archived successfully! 🎉',
    data: result,
  });
});

// Contact Info Controllers
const createContactInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.createContactInfo(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: 'Contact info created successfully! 🎉',
    data: result,
  });
});

const getContactInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.getContactInfo();
  sendResponse(res, {
    statusCode: 200,
    message: 'Contact info retrieved successfully! 🎉',
    data: result,
  });
});

const updateContactInfo = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await contactService.updateContactInfo(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Contact info updated successfully! 🎉',
    data: result,
  });
});

export const contactController = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  getContactsByStatus,
  markAsRead,
  markAsReplied,
  archiveContact,
  createContactInfo,
  getContactInfo,
  updateContactInfo,
};
