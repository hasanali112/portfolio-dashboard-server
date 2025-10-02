/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../config'
import httpStatus from 'http-status'
import { User } from '../module/user/user.model'
import { AppError } from '../Error/AppError'

const superUser = {
  email: config.super_admin_email,
  contactNumber: config.super_admin_contact_number,
  password: config.super_admin_password,
  role: 'superAdmin',
  status: 'ACTIVE',
  isDeleted: false,
}

const seedSuperAdmin = async () => {
  try {
    const isSuperAdminExist = await User.findOne({
      role: 'superAdmin',
      isDeleted: false,
    })

    if (!isSuperAdminExist) {
      await User.create(superUser)
      console.log('✅ Super admin created successfully')
    } else {
      console.log('ℹ️ Super admin already exists')
    }
  } catch (error: any) {
    console.error('❌ Super admin seeding error:', error.message)
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to handle super admin setup',
    )
  }
}

export default seedSuperAdmin
