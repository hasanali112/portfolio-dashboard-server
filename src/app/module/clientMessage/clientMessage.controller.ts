import { Request, Response } from 'express';
import { ClientMessageService } from './clientMessage.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createClientMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await ClientMessageService.createClientMessage(req.body);
  
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Message sent successfully! We will contact you soon.',
    data: result,
  });
});

const getAllClientMessages = catchAsync(async (req: Request, res: Response) => {
  const result = await ClientMessageService.getAllClientMessages();
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Client messages retrieved successfully',
    data: result,
  });
});

const updateMessageStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const result = await ClientMessageService.updateMessageStatus(id, status);
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Message status updated successfully',
    data: result,
  });
});

const deleteClientMessage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  await ClientMessageService.deleteClientMessage(id);
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Message deleted successfully',
    data: null,
  });
});

export const ClientMessageController = {
  createClientMessage,
  getAllClientMessages,
  updateMessageStatus,
  deleteClientMessage,
};
