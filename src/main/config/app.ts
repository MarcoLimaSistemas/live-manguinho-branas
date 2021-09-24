import express from 'express'
import { setupApolloServer } from './apollo-server'
import { setupRoutes } from './routes'

const app = express()
setupRoutes(app)
setupApolloServer(app)
export default app
