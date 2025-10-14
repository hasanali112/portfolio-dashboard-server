/* eslint-disable no-console */
import cron from 'node-cron'
import { LinkedInConnectionService } from '../module/linkedinConnection/linkedinConnection.service'

export const startScheduler = () => {
  // Run daily at 9:00 AM
  cron.schedule('0 9 * * *', async () => {
    try {
      console.log('Checking pending LinkedIn connections...')
      await LinkedInConnectionService.checkPendingConnections()
      console.log('Pending connections check completed')
    } catch (error) {
      console.error('Error in scheduled pending connections check:', error)
    }
  })

  console.log('LinkedIn connection scheduler started')
}
