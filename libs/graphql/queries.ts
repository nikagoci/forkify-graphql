import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  {
    Recipes {
      id
      publisher
      source_url
      image_url
      social_rank
      title
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe($publisher: String, $ingredients: [String], $source_url: String, $image_url: String, $social_rank: Int, $title: String) {
    addRecipe(publisher: $publisher, ingredients: $ingredients, source_url: $source_url, image_url: $image_url, social_rank: $social_rank, title: $title) {
      id
      publisher
      ingredients
      source_url
      image_url
      social_rank
      title
    }
  }
`