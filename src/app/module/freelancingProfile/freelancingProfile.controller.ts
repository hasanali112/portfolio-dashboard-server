import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FreelancingProfileService } from './freelancingProfile.service';

const createFreelancingProfile = catchAsync(async (req: Request, res: Response) => {
  const profileData = req.body;
  
  // Handle uploaded images
  if (req.files && typeof req.files === 'object') {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    if (files.gigImage && files.gigImage[0]) {
      profileData.gigImage = files.gigImage[0].path;
    }
    if (files.platformLogo && files.platformLogo[0]) {
      profileData.platformLogo = files.platformLogo[0].path;
    }
  }

  // Parse JSON strings from FormData
  if (typeof profileData.packages === 'string') {
    profileData.packages = JSON.parse(profileData.packages);
  }
  if (typeof profileData.faqs === 'string') {
    profileData.faqs = JSON.parse(profileData.faqs);
  }
  if (typeof profileData.requirements === 'string') {
    profileData.requirements = JSON.parse(profileData.requirements);
  }

  const result = await FreelancingProfileService.createFreelancingProfile(profileData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Freelancing profile created successfully',
    data: result,
  });
});

const getAllFreelancingProfiles = catchAsync(async (req: Request, res: Response) => {
  const filters = req.query;
  const result = await FreelancingProfileService.getAllFreelancingProfiles(filters);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Freelancing profiles retrieved successfully',
    data: result,
  });
});

const getFreelancingProfileById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FreelancingProfileService.getFreelancingProfileById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Freelancing profile retrieved successfully',
    data: result,
  });
});

const updateFreelancingProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  
  // Handle uploaded images
  if (req.files && typeof req.files === 'object') {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    if (files.gigImage && files.gigImage[0]) {
      updateData.gigImage = files.gigImage[0].path;
    }
    if (files.platformLogo && files.platformLogo[0]) {
      updateData.platformLogo = files.platformLogo[0].path;
    }
  }

  // Parse JSON strings from FormData
  if (typeof updateData.packages === 'string') {
    updateData.packages = JSON.parse(updateData.packages);
  }
  if (typeof updateData.faqs === 'string') {
    updateData.faqs = JSON.parse(updateData.faqs);
  }
  if (typeof updateData.requirements === 'string') {
    updateData.requirements = JSON.parse(updateData.requirements);
  }

  const result = await FreelancingProfileService.updateFreelancingProfile(id, updateData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Freelancing profile updated successfully',
    data: result,
  });
});

const deleteFreelancingProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FreelancingProfileService.deleteFreelancingProfile(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Freelancing profile deleted successfully',
    data: result,
  });
});

const getFeaturedProfiles = catchAsync(async (req: Request, res: Response) => {
  const result = await FreelancingProfileService.getFeaturedProfiles();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured profiles retrieved successfully',
    data: result,
  });
});

const getProfilesByCategory = catchAsync(async (req: Request, res: Response) => {
  const { category } = req.params;
  const result = await FreelancingProfileService.getProfilesByCategory(category);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profiles by category retrieved successfully',
    data: result,
  });
});

export const FreelancingProfileController = {
  createFreelancingProfile,
  getAllFreelancingProfiles,
  getFreelancingProfileById,
  updateFreelancingProfile,
  deleteFreelancingProfile,
  getFeaturedProfiles,
  getProfilesByCategory,
};
