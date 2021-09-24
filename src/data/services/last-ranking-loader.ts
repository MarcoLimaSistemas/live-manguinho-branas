import { RankingScore } from '@/domain/entities'
import { LastRankingLoader } from '@/domain/usecases'
import { LastRankingLoaderRepository } from '@/data/contracts/last-ranking-loader-repository'
import { RankinkUnavailiableError } from '@/domain/erros'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor (private readonly rankingScoreRapository: LastRankingLoaderRepository) {

  }

  async load (): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankinkUnavailiableError()
    }
    return this.rankingScoreRapository.loadLastRanking()
  }
}
