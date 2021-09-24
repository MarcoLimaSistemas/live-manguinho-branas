import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        lastRanking: [RankingScore!]
    }
    type Player {
        name: String!
        country: String!
      
      }
      
      type Hero {
        name: String!
        level: Int!
      }
      type RankingScore {
        player: Player
        score: Int!
        matchDate: String!
        heroes: [Hero!]!
      }      
`
