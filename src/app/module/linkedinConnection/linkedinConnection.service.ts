import { TLinkedInConnection } from './linkedinConnection.interface'
import { LinkedInConnection } from './linkedinConnection.model'
import { sendEmail } from '../../utils/sendEmail'
import { Request } from 'express'
import QueryBuilder from '../../builder/QueryBuilder'

const createLinkedInConnection = async (payload: TLinkedInConnection) => {
  const result = await LinkedInConnection.create(payload)
  return result
}

const getAllLinkedInConnections = async (req: Request) => {
  const queryLinkedIn = await new QueryBuilder(
    LinkedInConnection.find(),
    req.query,
  )
    .search(['name', 'email'])
    .filter()
    .sort()
    .pagination()
    .fields().modelQuery
  const count = await new QueryBuilder(LinkedInConnection.find(), req.query)
    .pagination()
    .countTotal()
  const result = { queryLinkedIn, count }
  return result
}

const getSingleLinkedInConnection = async (id: string) => {
  const result = await LinkedInConnection.findById(id)
  return result
}

const updateLinkedInConnection = async (
  id: string,
  payload: Partial<TLinkedInConnection>,
) => {
  const result = await LinkedInConnection.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

const deleteLinkedInConnection = async (id: string) => {
  const result = await LinkedInConnection.findByIdAndDelete(id)
  return result
}

const checkPendingConnections = async () => {
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

  const pendingConnections = await LinkedInConnection.find({
    reqStatus: 'pending',
    createdAt: { $lte: sevenDaysAgo },
  })

  if (pendingConnections.length > 0) {
    const connectionList = pendingConnections
      .map(
        (conn, index) =>
          `${index + 1}. ${conn.name} - ${conn.designation} (${conn.email})`,
      )
      .join('\n')

    const emailHtml = `
      <h2>Pending LinkedIn Connections - 7+ Days Old</h2>
      <p>The following connections have been pending for more than 7 days:</p>
      <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
${connectionList}
      </pre>
      <p>Consider removing these connections or following up.</p>
    `

    await sendEmail(
      'noreply@hasanali.com',
      emailHtml,
      `${pendingConnections.length} Pending LinkedIn Connections Need Review`,
      `Pending connections: ${connectionList}`,
    )
  }

  return pendingConnections
}

const sendDM = async (id: string) => {
  const result = await LinkedInConnection.findByIdAndUpdate(
    id, 
    { 
      dmStatus: 'sent',
      dmSentDate: new Date()
    }, 
    { new: true }
  );
  return result;
};

const startOutreach = async (id: string) => {
  const result = await LinkedInConnection.findByIdAndUpdate(
    id, 
    { 
      outreachStatus: 'in_progress',
      outreachDate: new Date()
    }, 
    { new: true }
  );
  return result;
};

export const LinkedInConnectionService = {
  createLinkedInConnection,
  getAllLinkedInConnections,
  getSingleLinkedInConnection,
  updateLinkedInConnection,
  deleteLinkedInConnection,
  checkPendingConnections,
  sendDM,
  startOutreach,
}
