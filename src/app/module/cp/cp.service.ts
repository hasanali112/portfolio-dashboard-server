import { ICP } from './cp.interface';
import { CP } from './cp.model';

const createCP = async (payload: ICP): Promise<ICP> => {
  const result = await CP.create(payload);
  return result;
};

const getAllCP = async (): Promise<ICP[]> => {
  const result = await CP.find({}).sort({ date: -1 });
  return result;
};

const getSingleCP = async (id: string): Promise<ICP | null> => {
  const result = await CP.findById(id);
  return result;
};

const updateCP = async (id: string, payload: Partial<ICP>): Promise<ICP | null> => {
  const result = await CP.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteCP = async (id: string): Promise<ICP | null> => {
  const result = await CP.findByIdAndDelete(id);
  return result;
};

export const CPService = {
  createCP,
  getAllCP,
  getSingleCP,
  updateCP,
  deleteCP,
};
