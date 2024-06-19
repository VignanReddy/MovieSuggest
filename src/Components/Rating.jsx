import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import React, { useState } from "react";
import { ratingsData } from "../data";

function Rating({ handleRatings, isAnyRating }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-64">
      <div
        onClick={toggleOptions}
        className="border px-2 border-gray-600  h-10 flex items-center justify-between"
      >
        <div className="text-gray-500">Rating</div>
        <div className="text-gray-600">
          {isOpen ? (
            <RiArrowDropUpLine className="text-3xl" />
          ) : (
            <RiArrowDropDownLine className="text-3xl" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="border border-gray-600 p-2 mt-2">
          <div key="any_rating" className="px-2 mt-2 flex">
            <input type="checkbox" onChange={handleRatings} value={0}></input>
            <div className="px-2">Any Rating</div>
          </div>
          {ratingsData.map((rating, index) => (
            <div key={index} className="px-2 mt-2 flex pb-2">
              <input
                disabled={isAnyRating}
                type="checkbox"
                onChange={handleRatings}
                value={rating.value}
              ></input>
              <div className="px-2">{rating.icon}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Rating;
