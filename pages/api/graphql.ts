import prisma from "@/libs/prisma";
import {gql, ApolloServer} from 'apollo-server-micro'

// id          String   @id @default(auto()) @map("_id") @db.ObjectId
// publisher   String
// ingredients String[]
// source_url  String
// image_url   String
// social_rank Int
// title       String   @unique

const typeDefs = gql`
    type Recipe {
        id: String
        publisher: String
        ingredients: [String]
        source_url: String
        image_url: String
        social_rank: Int
        title: String
    }

    type Query {
        Recipes: [Recipe]
    }

    type Mutation {
        addRecipe(publisher: String, source_url: String, image_url: String, social_rank: Int, title: String): Recipe
    }
    
` 

type addProductArgs = {
    publisher: string;
    source_url: string;
    image_url: string;
    social_rank: number;
    title: string;
}

const resolvers = {
    Query: {
        Recipes: (_parent: Recipe, _args: {}, _context: {}) => {
            return prisma.recipes.findMany()
        }
    },
    Mutation: {
        addRecipe: (_parent: Recipe, _args: addProductArgs, _context: {}) => {
            const { publisher, source_url, image_url, social_rank, title } = _args;

            return prisma.recipes.create( { data: { publisher, social_rank, source_url, image_url, title } })
        }
    }
}

const apolloServer = new ApolloServer({typeDefs, resolvers})

const handler = apolloServer.createHandler( { path: '/api/graphql' })

export const config = { api: {bodyParser: false} }

export default handler;