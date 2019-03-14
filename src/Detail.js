import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAIL } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  return (
    <Query query={MOVIE_DETAIL} variables={{ movieId: Number(movieId) }}>
      {({ loading, error, data }) => {
        if (loading) return "loading ...!";
        if (error) return "error.....";
        return (
          <React.Fragment>
            <div>
              {data.movie.title} / {data.movie.rating}
            </div>
            <div>{data.movie.description_full}</div>
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default Detail;
