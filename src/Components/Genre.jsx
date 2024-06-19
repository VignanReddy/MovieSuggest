import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import React, { useState } from "react";
import { genresData } from "../data";
function Genre({ handleGenres, isAnyGenre }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className="border border-gray-600 px-2 w-44 h-10 flex items-center justify-between"
        onClick={toggleOptions}
      >
        <div className="text-gray-500">Genre</div>
        <div className="text-gray-600">
          {isOpen ? (
            <RiArrowDropUpLine className="text-3xl" />
          ) : (
            <RiArrowDropDownLine className="text-3xl" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="border border-gray-600 px-2 mt-2 pb-4">
          <div key="anygenre" className="px-2 mt-2 flex">
            <input type="checkbox" onChange={handleGenres} value={0}></input>
            <div className="px-2">Any Genre</div>
          </div>
          {genresData.map((genre, index) => (
            <div key={index} className="px-2 mt-2 flex">
              <input
                disabled={isAnyGenre}
                type="checkbox"
                onChange={handleGenres}
                value={genre.value}
              ></input>
              <div className="px-2">{genre.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Genre;

{
  /* <div>
            <input
              type="checkbox"
              onChange={handleGenres}
              value="horror"
            ></input>
            <label>Horror</label>
          </div> */
}
