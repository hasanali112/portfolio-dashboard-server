import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { LinkedInConnectionService } from './linkedinConnection.service'

const createLinkedInConnection = catchAsync(
  async (req: Request, res: Response) => {
    const result = await LinkedInConnectionService.createLinkedInConnection(
      req.body,
    )

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'LinkedIn connection created successfully',
      data: result,
    })
  },
)

const getAllLinkedInConnections = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await LinkedInConnectionService.getAllLinkedInConnections(req)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'LinkedIn connections retrieved successfully',
      meta: result.count,
      data: result.queryLinkedIn,
    })
  },
)

const getSingleLinkedInConnection = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result =
      await LinkedInConnectionService.getSingleLinkedInConnection(id)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'LinkedIn connection retrieved successfully',
      data: result,
    })
  },
)

const updateLinkedInConnection = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await LinkedInConnectionService.updateLinkedInConnection(
      id,
      req.body,
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'LinkedIn connection updated successfully',
      data: result,
    })
  },
)

const deleteLinkedInConnection = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await LinkedInConnectionService.deleteLinkedInConnection(id)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'LinkedIn connection deleted successfully',
      data: result,
    })
  },
)

const checkPendingConnections = catchAsync(
  async (req: Request, res: Response) => {
    const result = await LinkedInConnectionService.checkPendingConnections()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Found ${result.length} pending connections older than 7 days`,
      data: result,
    })
  },
)

const sendDM = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LinkedInConnectionService.sendDM(id);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'DM sent successfully',
    data: result,
  });
});

const startOutreach = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LinkedInConnectionService.startOutreach(id);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Outreach started successfully',
    data: result,
  });
});

export const LinkedInConnectionController = {
  createLinkedInConnection,
  getAllLinkedInConnections,
  getSingleLinkedInConnection,
  updateLinkedInConnection,
  deleteLinkedInConnection,
  checkPendingConnections,
  sendDM,
  startOutreach,
};
