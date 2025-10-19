import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { CPService } from './cp.service';

const createCP = catchAsync(async (req: Request, res: Response) => {
  const result = await CPService.createCP(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'CP created successfully',
    data: result,
  });
});

const getAllCP = catchAsync(async (req: Request, res: Response) => {
  const result = await CPService.getAllCP();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CP retrieved successfully',
    data: result,
  });
});

const getSingleCP = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CPService.getSingleCP(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CP retrieved successfully',
    data: result,
  });
});

const updateCP = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CPService.updateCP(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CP updated successfully',
    data: result,
  });
});

const deleteCP = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CPService.deleteCP(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CP deleted successfully',
    data: result,
  });
});

export const CPController = {
  createCP,
  getAllCP,
  getSingleCP,
  updateCP,
  deleteCP,
};
