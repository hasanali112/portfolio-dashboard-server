import { Request } from 'express';

export const extractRealIP = (req: Request): string => {
  // Try multiple headers to get real IP
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  const cfConnectingIP = req.headers['cf-connecting-ip'];
  
  if (forwarded) {
    const ips = Array.isArray(forwarded) ? forwarded[0] : forwarded;
    return ips.split(',')[0].trim();
  }
  
  if (realIP) {
    return Array.isArray(realIP) ? realIP[0] : realIP;
  }
  
  if (cfConnectingIP) {
    return Array.isArray(cfConnectingIP) ? cfConnectingIP[0] : cfConnectingIP;
  }
  
  return req.connection.remoteAddress || req.socket.remoteAddress || 'unknown';
};

export const parseUserAgent = (userAgent: string) => {
  if (!userAgent) return { browser: 'Unknown', os: 'Unknown', device: 'Unknown' };

  // Browser detection
  let browser = 'Unknown';
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) browser = 'Safari';
  else if (userAgent.includes('Edg')) browser = 'Edge';
  else if (userAgent.includes('Opera')) browser = 'Opera';

  // OS detection
  let os = 'Unknown';
  if (userAgent.includes('Windows NT 10.0')) os = 'Windows 10';
  else if (userAgent.includes('Windows NT 6.3')) os = 'Windows 8.1';
  else if (userAgent.includes('Windows NT 6.1')) os = 'Windows 7';
  else if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac OS X')) {
    const macMatch = userAgent.match(/Mac OS X (\d+[._]\d+)/);
    os = macMatch ? `macOS ${macMatch[1].replace('_', '.')}` : 'macOS';
  }
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) {
    const androidMatch = userAgent.match(/Android (\d+\.?\d*)/);
    os = androidMatch ? `Android ${androidMatch[1]}` : 'Android';
  }
  else if (userAgent.includes('iPhone OS')) {
    const iosMatch = userAgent.match(/iPhone OS (\d+_\d+)/);
    os = iosMatch ? `iOS ${iosMatch[1].replace('_', '.')}` : 'iOS';
  }

  // Device detection
  let device = 'Desktop';
  if (userAgent.includes('Mobile') || userAgent.includes('Android')) device = 'Mobile';
  else if (userAgent.includes('Tablet') || userAgent.includes('iPad')) device = 'Tablet';

  return { browser, os, device };
};
