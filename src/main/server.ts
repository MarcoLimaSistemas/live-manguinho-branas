import 'module-alias/register'

import { setupRoutes } from '@/main/config/routes'

import app from '@/main/config/app'
import { env } from '@/main/config/env'

app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
setupRoutes(app)
