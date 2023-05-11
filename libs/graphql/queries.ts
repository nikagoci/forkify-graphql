import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  query getRecipes($skip: Int, $take: Int){
    Recipes(skip: $skip, take: $take) {
      id
      publisher
      source_url
      image_url
      social_rank
      title
    }
  }
`;

export const GET_SINGLE_RECIPE  = gql`
  query getSingleRecipe($id: String) {
    Recipe(id: $id) {
      id
      publisher
      source_url
      image_url
      social_rank
      title
      ingredients
    }
  }
`

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