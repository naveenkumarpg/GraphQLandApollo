import React from "react";
import { Layout } from "../components";

import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";

const TRACKS = gql`
  query Query {
    tracksForHome {
      test
      moduleCount
      length
      thumbnail
      author {
        name
        id
        photo
      }
      id
      title
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) {
    return "Loading...!";
  }

  if (error) {
    return "Error";
  }

  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => {
        return <TrackCard key={track.id} track={track} />;
      })}
    </Layout>
  );
};

export default Tracks;
