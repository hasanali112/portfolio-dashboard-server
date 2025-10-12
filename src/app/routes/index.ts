import { Router } from 'express'
import { blogRoute } from '../module/blog/blog.routes'
import { skillRoutes } from '../module/skill/skill.route'
import { projectRoute } from '../module/project/project.routes'
import { shopRoute } from '../module/shop/shop.routes'
import { experienceRoute } from '../module/expericence/experience.routes'
import { aboutRoute } from '../module/about/about.routes'
import { serviceRoute } from '../module/services/services.routes'
import { contactRoute } from '../module/contact/contact.routes'
import { authRoute } from '../module/auth/auth.routes'
import { testimonialRoute } from '../module/testimonial/testimonial.routes'
import { ClientMessageRoutes } from '../module/clientMessage/clientMessage.route'
import { VisitorRoutes } from '../module/visitor/visitor.route'
import { TaskRoutes } from '../module/timeManagement/timeManagement.route'

const middilewareRoutes = Router()

const routes = [
  {
    path: '/auth',
    route: authRoute,
  },
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
  {
    path: '/shop',
    route: shopRoute,
  },
  {
    path: '/experience',
    route: experienceRoute,
  },
  {
    path: '/about',
    route: aboutRoute,
  },
  {
    path: '/testimonial',
    route: testimonialRoute,
  },
  {
    path: '/services',
    route: serviceRoute,
  },
  {
    path: '/contact',
    route: contactRoute,
  },
  {
    path: '/client-messages',
    route: ClientMessageRoutes,
  },
  {
    path: '/visitors',
    route: VisitorRoutes,
  },
  {
    path: '/tasks',
    route: TaskRoutes,
  },
]

routes.forEach(route => middilewareRoutes.use(route.path, route.route))
export default middilewareRoutes
