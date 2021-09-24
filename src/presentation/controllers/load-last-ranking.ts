import { LastRankingLoader } from '@/domain/usecases'
import { Controller, HttpResponse, ok, serverError } from '@/presentation/contracts'
import { RankingScoreViewModel } from '@/presentation/view-model'

export default class loadLastRankingController implements Controller {
  constructor (private readonly lastRankingLoader: LastRankingLoader) {}
  async handle (): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load()
      return ok(ranking.map(e => ({
        ...e,
        matchDate: e.matchDate.toISOString()
      })))
    } catch (error) {
      return serverError(error)
    }
  }
}
