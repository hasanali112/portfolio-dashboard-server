/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './app/config'
import { Server } from 'http'

const port = process.env.PORT || config.port

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    server = app.listen(port, () => {
      console.log(`Portfolio app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()

process.on('unhandledRejection', (error: Error) => {
  console.log(`🤷♂️ Unhandled rejection:`, error.message)
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
})

process.on('uncaughtException', (error: Error) => {
  console.log(`🤷♂️ Uncaught exception:`, error.message)
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
})
