export interface IVisitor {
  ipAddress: string;
  userAgent?: string;
  country?: string;
  city?: string;
  visitedAt: Date;
  page?: string;
  browser?: string;
  os?: string;
  device?: string;
}
