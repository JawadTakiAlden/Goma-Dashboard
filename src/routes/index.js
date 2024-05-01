import { useRoutes } from 'react-router'
import { authRoutes } from './authRoutes'
import { dashboardRoutes } from './dashboardRoutes'

const Router = () => {
  return useRoutes([authRoutes , dashboardRoutes])
}

export default Router