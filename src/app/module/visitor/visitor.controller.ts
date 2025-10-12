import { Request, Response } from 'express';
import { VisitorService } from './visitor.service';
import httpStatus from 'http-status';
import { extractRealIP, parseUserAgent } from '../../utils/visitorUtils';

const trackVisitor = async (req: Request, res: Response) => {
  try {
    const { page, clientIP } = req.body;
    
    // Use client-provided IP if available, otherwise extract from headers
    const ipAddress = clientIP && clientIP !== 'unknown' 
      ? clientIP 
      : extractRealIP(req);
    
    const userAgent = req.headers['user-agent'] || '';
    const { browser, os, device } = parseUserAgent(userAgent);

    const visitorData = {
      ipAddress,
      userAgent,
      page: page || '/',
      browser,
      os,
      device,
      visitedAt: new Date()
    };

    await VisitorService.trackVisitor(visitorData);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'Visitor tracked successfully'
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to track visitor',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const getVisitorStats = async (req: Request, res: Response) => {
  try {
    const stats = await VisitorService.getVisitorStats();
    
    res.status(httpStatus.OK).json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to get visitor stats',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const getRecentVisitors = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 50;
    const visitors = await VisitorService.getRecentVisitors(limit);
    
    res.status(httpStatus.OK).json({
      success: true,
      data: visitors
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to get recent visitors',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const getVisitorsByCountry = async (req: Request, res: Response) => {
  try {
    const countryStats = await VisitorService.getVisitorsByCountry();
    
    res.status(httpStatus.OK).json({
      success: true,
      data: countryStats
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to get visitors by country',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const deleteVisitor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await VisitorService.deleteVisitor(id);
    
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Visitor deleted successfully'
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to delete visitor',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const deleteAllVisitors = async (req: Request, res: Response) => {
  try {
    await VisitorService.deleteAllVisitors();
    
    res.status(httpStatus.OK).json({
      success: true,
      message: 'All visitors deleted successfully'
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to delete all visitors',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const VisitorController = {
  trackVisitor,
  getVisitorStats,
  getRecentVisitors,
  getVisitorsByCountry,
  deleteVisitor,
  deleteAllVisitors
};
