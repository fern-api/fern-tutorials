import { GetMovieErrorBody } from "@imdb-fern/api-server/model/imdb";
import { MoviesService } from "@imdb-fern/api-server/services/imdb";
import express from "express";

const app = express();

app.use(
  MoviesService.expressMiddleware({
    createMovie: () => {
      return {
        ok: true,
        // We are hardcoding the movie "Iron Man 3" for this demo
        // because we don't have our server wired up to a database.
        body: "iron-man-3"
      };
    },

    getMovie: () => {
      return {
        ok: false,
        error: GetMovieErrorBody.notFoundError(),
      };
    },
  })
);

console.log("Listening for requests...");
app.listen(8080);