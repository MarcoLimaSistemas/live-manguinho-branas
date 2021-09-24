
import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeLoadLastRankingController } from '@/main/factories'

export default (router: Router): void => {
  router.get('rankings/last', adaptRoute(makeLoadLastRankingController()))
}
