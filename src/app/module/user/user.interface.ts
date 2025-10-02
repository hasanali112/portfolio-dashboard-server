export type IUserRole = {
  superAdmin: 'superAdmin'
}

export type TUser = {
  email: string
  contactNumber: string
  password: string
  needPasswordChange: boolean
  role: IUserRole
  status: 'ACTIVE' | 'BLOCKED'
  isDeleted: boolean
}
