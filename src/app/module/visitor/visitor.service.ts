import { Visitor } from './visitor.model';
import { IVisitor } from './visitor.interface';

const trackVisitor = async (visitorData: Partial<IVisitor>) => {
  // Use findOneAndUpdate with upsert to ensure unique IP
  return await Visitor.findOneAndUpdate(
    { ipAddress: visitorData.ipAddress },
    {
      ...visitorData,
      visitedAt: new Date()
    },
    { 
      new: true, 
      upsert: true 
    }
  );
};

const getVisitorStats = async () => {
  const totalVisitors = await Visitor.countDocuments();
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  
  const todayVisitors = await Visitor.countDocuments({
    visitedAt: { $gte: todayStart }
  });

  const uniqueIPs = await Visitor.distinct('ipAddress');
  const uniqueVisitors = uniqueIPs.length;

  return {
    totalVisitors,
    todayVisitors,
    uniqueVisitors
  };
};

const getRecentVisitors = async (limit: number = 50) => {
  return await Visitor.find()
    .sort({ visitedAt: -1 })
    .limit(limit)
    .select('ipAddress country city visitedAt page browser os device userAgent');
};

const getVisitorsByCountry = async () => {
  return await Visitor.aggregate([
    {
      $group: {
        _id: '$country',
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    },
    {
      $limit: 10
    }
  ]);
};

const deleteVisitor = async (id: string) => {
  return await Visitor.findByIdAndDelete(id);
};

const deleteAllVisitors = async () => {
  return await Visitor.deleteMany({});
};

export const VisitorService = {
  trackVisitor,
  getVisitorStats,
  getRecentVisitors,
  getVisitorsByCountry,
  deleteVisitor,
  deleteAllVisitors
};
