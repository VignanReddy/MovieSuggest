import { useEffect, useState } from "react";
import Search from "./Search";
import Rating from "./Rating";
import Genre from "./Genre";
import { movies } from "../data";

function Main() {
  const [genres, setGenres] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [text, setText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isAnyGenre, setAnyGenre] = useState(false);
  const [isAnyRating, setIsAnyRating] = useState(false);

  useEffect(() => {
    let filteredSuggestions = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(text.toLowerCase())
    );

    if (genres.length > 0) {
      filteredSuggestions = filteredSuggestions.filter((movie) =>
        genres.includes(movie.Category.toLowerCase())
      );
    }

    if (ratings.length > 0) {
      const maxRating = Math.max(...ratings);
      filteredSuggestions = filteredSuggestions.filter(
        (movie) => movie.Rating <= maxRating
      );
    }

    setFilteredMovies(filteredSuggestions);
  }, [genres, ratings, text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleGenres = (event) => {
    const value = event.target.value;

    if (value === "0") {
      setGenres([]);
      setAnyGenre(!isAnyGenre);
    } else {
      setGenres((prevState) =>
        prevState.includes(value)
          ? prevState.filter((item) => item !== value)
          : [...prevState, value]
      );
    }
  };

  const handleRatings = (event) => {
    const value = Number(event.target.value);

    if (value === 0) {
      setRatings([]);
      setIsAnyRating(!isAnyRating);
    } else {
      setRatings((prevState) =>
        prevState.includes(value)
          ? prevState.filter((item) => item !== value)
          : [...prevState, value]
      );
    }
  };

  return (
    <div className="">
      <div className="flex justify-center gap-3 m-6">
        <Search
          genres={genres}
          ratings={ratings}
          handleChange={handleChange}
          text={text}
          filteredMovies={filteredMovies}
        />
        <Rating handleRatings={handleRatings} isAnyRating={isAnyRating} />
        <Genre handleGenres={handleGenres} isAnyGenre={isAnyGenre} />
      </div>
    </div>
  );
}

export default Main;
