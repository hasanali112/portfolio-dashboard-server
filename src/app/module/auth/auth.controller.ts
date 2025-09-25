import { Request, Response } from 'express'
import { authService } from './auth.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.loginUser(req.body)

  const { refreshToken } = result

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
  })

  sendResponse(res, {
    statusCode: 200,
    message: 'User logged in successfully! 🎉',
    data: result,
  })
})

export const authController = {
  loginUser,
}
