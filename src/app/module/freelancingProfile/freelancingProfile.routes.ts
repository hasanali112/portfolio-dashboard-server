import express from 'express';
import { FreelancingProfileController } from './freelancingProfile.controller';
import { uploadMultipleImages } from '../../config/cloudinary/multer.config';

const router = express.Router();

// Public routes
router.get('/featured', FreelancingProfileController.getFeaturedProfiles);
router.get('/category/:category', FreelancingProfileController.getProfilesByCategory);
router.get('/:id', FreelancingProfileController.getFreelancingProfileById);
router.get('/', FreelancingProfileController.getAllFreelancingProfiles);

// Protected routes (add auth middleware as needed)
router.post('/', uploadMultipleImages([
  { name: 'gigImage', maxCount: 1 },
  { name: 'platformLogo', maxCount: 1 }
]), FreelancingProfileController.createFreelancingProfile);
router.patch('/:id', uploadMultipleImages([
  { name: 'gigImage', maxCount: 1 },
  { name: 'platformLogo', maxCount: 1 }
]), FreelancingProfileController.updateFreelancingProfile);
router.delete('/:id', FreelancingProfileController.deleteFreelancingProfile);

export const FreelancingProfileRoutes = router;
