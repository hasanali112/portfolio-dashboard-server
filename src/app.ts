import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import middilewareRoutes from './app/routes'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { notFoundRoutes } from './app/middleware/notFoundRoutes'
import cookieParser from 'cookie-parser'
const app: Application = express()

// Trust proxy for correct IP detection
app.set('trust proxy', true)

app.use(express.json())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://arvion-mart-frontend-rho.vercel.app',
      'https://arvionmart.vercel.app',
      'https://mdhasanalikhan.vercel.app',
    ],
    credentials: true,
  }),
)

app.use('/api/v1', middilewareRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio server is running',
  })
})

// Error Handlers
app.use(globalErrorHandler)
app.use(notFoundRoutes)

export default app
