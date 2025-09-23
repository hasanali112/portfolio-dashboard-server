import { Router } from 'express'
import { blogRoute } from '../module/blog/blog.routes'
import { skillRoutes } from '../module/skill/skill.route'
import { projectRoute } from '../module/project/project.routes'
import { shopRoute } from '../module/shop/shop.routes'
import { experienceRoute } from '../module/expericence/experience.routes'
import { aboutRoute } from '../module/about/about.routes'
import { testimonialRoute } from '../module/testimonial/testimonial.routes'
import { serviceRoute } from '../module/services/services.routes'
import { contactRoute } from '../module/contact/contact.routes'

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
]

routes.forEach(route => middilewareRoutes.use(route.path, route.route))
export default middilewareRoutes
