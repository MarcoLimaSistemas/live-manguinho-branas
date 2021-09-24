import { LastRankingLoaderRepository } from '@/data/contracts'
import { RankingScoreModel } from '@/data/models'
import { ranking } from '../data-sources'

export default class FakeRankingRepository implements LastRankingLoaderRepository {
  async loadLastRanking (): Promise<RankingScoreModel[]> {
    return ranking.map(e => ({
      player: e.user,
      score: e.score,
      matchDate: new Date(e.date),
      heroes: e.heroes
    }))
  }
}
