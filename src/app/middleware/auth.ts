import { AppError } from '../Error/AppError'
import catchAsync from '../utils/catchAsync'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import { User } from '../module/user/user.model'

type UserRole = 'superAdmin' | 'admin' | 'user'

const auth = (...roles: UserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
    }

    let decoded
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload
    } catch (error) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
    }
    const { email, role } = decoded
    const isUserExist = await User.findOne({ email })
    if (!isUserExist) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
    }

    if (roles.length && !roles.includes(role)) {
      throw new AppError(httpStatus.FORBIDDEN, 'Forbidden')
    }
    req.user = isUserExist as JwtPayload
    next()
  })
}

export default auth
