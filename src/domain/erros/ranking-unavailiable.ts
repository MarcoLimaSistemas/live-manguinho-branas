export class RankinkUnavailiableError extends Error {
  constructor () {
    super('Ranking unavailiable')
    this.name = 'UnavailiableError'
  }
}
