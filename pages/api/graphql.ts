import prisma from "@/libs/prisma";
import { gql, ApolloServer } from "apollo-server-micro";

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

  type RecipesWithTotalCount {
    recipes: [Recipe]
    totalCount: Int
  }

  type Query {
    Recipes(skip: Int, take: Int, info: String): RecipesWithTotalCount
    Recipe(id: String): Recipe
  }

  type Mutation {
    addRecipe(
      publisher: String
      source_url: String
      ingredients: [String]
      image_url: String
      social_rank: Int
      title: String
    ): Recipe
  }
`;

type addProductArgs = {
  publisher: string;
  source_url: string;
  image_url: string;
  social_rank: number;
  title: string;
  ingredients: string[];
};

const resolvers = {
  Query: {
    Recipes: async(_parent: Recipe, _args: {skip: number, take: number, info: string}, _context: {}) => {
      const {skip, take, info} = _args;

      const [totalCount, recipes] = await prisma.$transaction([
        prisma.recipes.count(),
        prisma.recipes.findMany( {skip, take, where: { title: { contains: info, mode: 'insensitive'  } }})
      ])


      return {recipes, totalCount}
      // return prisma.recipes.findMany({skip, take});
    },
    Recipe: (_parent: Recipe, _args: { id: string }, _context: {}) => {
      const { id } = _args;
      return prisma.recipes.findUnique({ where: { id } });
    },
  },
  Mutation: {
    addRecipe: (_parent: Recipe, _args: addProductArgs, _context: {}) => {
      const {
        publisher,
        source_url,
        image_url,
        social_rank,
        title,
        ingredients,
      } = _args;

      return prisma.recipes.create({
        data: {
          publisher,
          social_rank,
          source_url,
          image_url,
          title,
          ingredients,
        },
      });
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;
