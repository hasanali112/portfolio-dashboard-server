import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  super_admin_email: process.env.SUPER_ADMIN_EMAIL,
  super_admin_contact_number: process.env.SUPER_ADMIN_CONTACT_NUMBER,
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN,
  jwt_cookie_expires_in: process.env.JWT_COOKIE_EXPIRES_IN,
  cloudinary: {
    cloud_name: process.env.CLODINARY_CLOUD_NAME,
    api_key: process.env.CLODINARY_API_KEY,
    api_secret: process.env.CLODINARY_API_SECRET,
  },
}
