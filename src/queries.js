import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 10, rating: 8) {
      id
      title
      rating
      genres
      description_full
    }
  }
`;

export const MOVIE_DETAIL = gql`
  query getMovieDetail($movieId: Int!) {
    movie(id: $movieId) {
      title
      rating
      description_full
    }
    suggestions(id: $movieId) {
      title
      rating
    }
  }
`;
