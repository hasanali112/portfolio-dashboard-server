/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../config'
import httpStatus from 'http-status'
import { User } from '../module/user/user.model'
import { AppError } from '../Error/AppError'
import bcrypt from 'bcryptjs'

const seedSuperAdmin = async () => {
  try {
    const isSuperAdminExist = await User.findOne({
      role: 'superAdmin',
      isDeleted: false,
    })

    if (!isSuperAdminExist) {
      const hashedPassword = await bcrypt.hash(config.super_admin_password as string, 10)
      
      const superUser = {
        email: config.super_admin_email,
        contactNumber: config.super_admin_contact_number,
        password: hashedPassword,
        role: 'superAdmin',
        status: 'ACTIVE',
        isDeleted: false,
      }

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
