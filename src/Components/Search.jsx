import React, { useEffect, useState } from "react";
import { movies } from "../data";
import RatedMovies from "./RatedMovies";

function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Movie Name"
        className="border border-gray-600 w-96 h-10 p-4"
        onChange={props.handleChange}
      ></input>
      {props.text && (
        <div
          className={`border ${
            props.filteredMovies.length > 0 ? "border-gray-600 p-2 mt-2" : ""
          }`}
        >
          {props.filteredMovies.map((movie) => (
            <RatedMovies
              movieName={movie.Title}
              rating={movie.Rating}
              category={movie.Category}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
