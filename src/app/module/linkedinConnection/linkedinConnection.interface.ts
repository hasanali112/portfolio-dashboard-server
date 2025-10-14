export interface TLinkedInConnection {
  name: string;
  designation: string;
  email: string;
  phoneNumber?: string;
  website?: string;
  link: string;
  reqStatus: 'pending' | 'accepted' | 'declined' | 'withdrawn';
  dmStatus: 'not_sent' | 'sent' | 'replied' | 'no_response';
  dmSentDate?: Date;
  outreachStatus?: 'not_started' | 'in_progress' | 'completed' | 'paused';
  outreachDate?: Date;
}
