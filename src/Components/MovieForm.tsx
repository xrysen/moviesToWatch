import { useState } from "react";
import "firebase/firestore";
import { useFirestore } from "reactfire";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MovieForm = () => {
  const movieRef = useFirestore().collection("movies");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieGenre, setMovieGenre] = useState("");

  const handleTitle = (e: any) => {
    setMovieTitle(e.target.value);
  };

  const handleGenre = (e: any) => {
    setMovieGenre(e.target.value);
  };

  const addMovie = (e: any) => {
    e.preventDefault();
    movieRef.add({ title: movieTitle, genre: movieGenre });
    setMovieGenre("");
    setMovieTitle("");
  };

  return (
    <Paper className="movie-form">
      <form onSubmit={addMovie}>
        <h3>Add New Movie</h3>
        <TextField
          className="text-field"
          required
          label="Movie Title"
          onChange={(e) => handleTitle(e)}
          value={movieTitle}
          name="Movie Title"
        />
        <br />
        <TextField
          required
          label="Movie Genre"
          onChange={(e) => handleGenre(e)}
          value={movieGenre}
          name="Movie Genre"
        />
        <br />
        <Button type="submit">Add</Button>
      </form>
    </Paper>
  );
};

export default MovieForm;
