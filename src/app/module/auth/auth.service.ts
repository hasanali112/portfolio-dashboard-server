import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { TLoginUser } from './auth.interface'
import { User } from '../user/user.model'
import config from '../../config'

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    throw new Error('User not found')
  }

  if (user.status === 'BLOCKED') {
    throw new Error('User is blocked')
  }

  if (user.isDeleted) {
    throw new Error('User is deleted')
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  )

  if (!isPasswordMatched) {
    throw new Error('Invalid credentials')
  }

  const jwtPayload = {
    userId: user._id,
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(
    jwtPayload,
    config.jwt_access_secret as string,
    {
      expiresIn: config.jwt_access_expires_in || '7d',
    } as jwt.SignOptions,
  )

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in || '30d',
    } as jwt.SignOptions,
  )

  return {
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    token: accessToken,
    refreshToken,
  }
}

export const authService = {
  loginUser,
}
