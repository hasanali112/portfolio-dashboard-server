import { IClientMessage } from '../../interface/clientMessage.interface';
import { ClientMessage } from './clientMessage.model';
import { sendEmail } from '../../utils/sendEmail';

const createClientMessage = async (payload: IClientMessage) => {
  // Save to database
  const result = await ClientMessage.create(payload);
  
  // Send email notification
  try {
    const selectedServicesList = Object.entries(payload.selectedServices)
      .filter(([_, selected]) => selected)
      .map(([service, _]) => service)
      .join(', ');

    const emailContent = `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${payload.fullName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Company:</strong> ${payload.company || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${payload.phone || 'Not provided'}</p>
      <p><strong>Timeline:</strong> ${payload.timeline || 'Not specified'}</p>
      <p><strong>Budget:</strong> ${payload.selectedBudget}</p>
      <p><strong>Services:</strong> ${selectedServicesList}</p>
      <p><strong>Description:</strong></p>
      <p>${payload.description}</p>
    `;

    // Send email to admin
    await sendEmail(
      payload.email,
      emailContent,
      `New Project Inquiry from ${payload.fullName}`,
      `New project inquiry from ${payload.fullName}`
    );

  } catch (emailError) {
    console.log('Email sending failed:', emailError);
    // Don't throw error, just log it - message is still saved to database
  }

  return result;
};

const getAllClientMessages = async () => {
  return await ClientMessage.find().sort({ createdAt: -1 });
};

const updateMessageStatus = async (id: string, status: string) => {
  return await ClientMessage.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};

const deleteClientMessage = async (id: string) => {
  return await ClientMessage.findByIdAndDelete(id);
};

export const ClientMessageService = {
  createClientMessage,
  getAllClientMessages,
  updateMessageStatus,
  deleteClientMessage,
};
