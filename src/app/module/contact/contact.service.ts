import { TContact, TContactInfo } from './contact.interface';
import { Contact, ContactInfo } from './contact.model';

const createContact = async (contactData: TContact) => {
  const result = await Contact.create(contactData);
  return result;
};

const getAllContacts = async () => {
  const result = await Contact.find({ isArchived: false }).sort({ createdAt: -1 });
  return result;
};

const getContactById = async (id: string) => {
  const result = await Contact.findById(id);
  return result;
};

const updateContact = async (id: string, contactData: Partial<TContact>) => {
  const result = await Contact.findByIdAndUpdate(id, contactData, { new: true });
  return result;
};

const deleteContact = async (id: string) => {
  const result = await Contact.findByIdAndDelete(id);
  return result;
};

const getContactsByStatus = async (status: string) => {
  const result = await Contact.find({ status, isArchived: false }).sort({ createdAt: -1 });
  return result;
};

const markAsRead = async (id: string) => {
  const result = await Contact.findByIdAndUpdate(id, { status: 'read' }, { new: true });
  return result;
};

const markAsReplied = async (id: string) => {
  const result = await Contact.findByIdAndUpdate(
    id, 
    { status: 'replied', repliedAt: new Date() }, 
    { new: true }
  );
  return result;
};

const archiveContact = async (id: string) => {
  const result = await Contact.findByIdAndUpdate(id, { isArchived: true }, { new: true });
  return result;
};

// Contact Info Services
const createContactInfo = async (contactInfoData: TContactInfo) => {
  const result = await ContactInfo.create(contactInfoData);
  return result;
};

const getContactInfo = async () => {
  const result = await ContactInfo.findOne({ isActive: true });
  return result;
};

const updateContactInfo = async (id: string, contactInfoData: Partial<TContactInfo>) => {
  const result = await ContactInfo.findByIdAndUpdate(id, contactInfoData, { new: true });
  return result;
};

export const contactService = {
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
