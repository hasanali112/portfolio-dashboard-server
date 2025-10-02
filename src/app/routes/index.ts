import { Router } from 'express'
import { blogRoute } from '../module/blog/blog.routes'
import { skillRoutes } from '../module/skill/skill.route'
import { projectRoute } from '../module/project/project.routes'

const middilewareRoutes = Router()

const routes = [
  {
    path: '/blog',
    route: blogRoute,
  },
  {
    path: '/skills',
    route: skillRoutes,
  },
  {
    path: '/projects',
    route: projectRoute,
  },
]

routes.forEach(route => middilewareRoutes.use(route.path, route.route))
export default middilewareRoutes
