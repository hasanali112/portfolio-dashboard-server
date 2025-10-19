import { IFreelancingProfile, IFreelancingProfileFilters } from './freelancingProfile.interface';
import { FreelancingProfile } from './freelancingProfile.model';

const createFreelancingProfile = async (profileData: IFreelancingProfile): Promise<IFreelancingProfile> => {
  const result = await FreelancingProfile.create(profileData);
  return result;
};

const getAllFreelancingProfiles = async (filters: IFreelancingProfileFilters) => {
  const query: any = { isActive: true };

  // Apply filters
  if (filters.category) query.category = filters.category;
  if (filters.subcategory) query.subcategory = filters.subcategory;
  if (filters.serviceType) query.serviceType = filters.serviceType;
  if (filters.rating) query.rating = { $gte: filters.rating };
  if (filters.deliveryTime) {
    query['packages.basic.deliveryTime'] = { $lte: filters.deliveryTime };
  }
  if (filters.search) {
    query.$or = [
      { serviceName: { $regex: filters.search, $options: 'i' } },
      { description: { $regex: filters.search, $options: 'i' } }
    ];
  }

  const result = await FreelancingProfile.find(query)
    .sort({ featured: -1, rating: -1, createdAt: -1 });
  
  return result;
};

const getFreelancingProfileById = async (id: string): Promise<IFreelancingProfile | null> => {
  const result = await FreelancingProfile.findById(id);
  return result;
};

const updateFreelancingProfile = async (
  id: string,
  payload: Partial<IFreelancingProfile>
): Promise<IFreelancingProfile | null> => {
  const result = await FreelancingProfile.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true
  });
  return result;
};

const deleteFreelancingProfile = async (id: string): Promise<IFreelancingProfile | null> => {
  const result = await FreelancingProfile.findByIdAndDelete(id);
  return result;
};

const getFeaturedProfiles = async (): Promise<IFreelancingProfile[]> => {
  // First try to get featured profiles
  let result = await FreelancingProfile.find({ 
    isActive: true, 
    featured: true 
  })
    .sort({ rating: -1, createdAt: -1 })
    .limit(6);
  
  // If no featured profiles, get the latest active profiles
  if (result.length === 0) {
    result = await FreelancingProfile.find({ 
      isActive: true 
    })
      .sort({ createdAt: -1 })
      .limit(2);
  }
  
  return result;
};

const getProfilesByCategory = async (category: string): Promise<IFreelancingProfile[]> => {
  const result = await FreelancingProfile.find({ 
    isActive: true, 
    category 
  })
    .sort({ rating: -1, createdAt: -1 });
  
  return result;
};

export const FreelancingProfileService = {
  createFreelancingProfile,
  getAllFreelancingProfiles,
  getFreelancingProfileById,
  updateFreelancingProfile,
  deleteFreelancingProfile,
  getFeaturedProfiles,
  getProfilesByCategory
};
