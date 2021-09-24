import { Controller } from '@/presentation/contracts'
import { LastRankingLoaderService } from '@/data/services'
import FakeRankingRepository from '@/infra/repositories/fake-ranking'
import LoadLastRankingController from '@/presentation/controllers/load-last-ranking'
export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repo)
  const controller = new LoadLastRankingController(loader)
  return controller
}
