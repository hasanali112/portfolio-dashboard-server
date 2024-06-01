import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { skillRoutes } from './module/skill/skill.route'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', skillRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio server is running',
  })
})

export default app
