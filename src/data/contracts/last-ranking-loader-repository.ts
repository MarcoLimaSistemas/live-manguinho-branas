
import { RankingScoreModel } from '@/data/models'

export interface LastRankingLoaderRepository {
  loadLastRanking: () => Promise<RankingScoreModel[]>
}
