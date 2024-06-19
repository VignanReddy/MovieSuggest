import { Rating } from "react-simple-star-rating";
import StarRatings from "react-star-ratings";
function RatedMovies({ movieName, rating, category }) {
  return (
    <div className="flex justify-between mt-4">
      <div className="justify-between">
        <div>{movieName}</div>
        <div>
          <StarRatings
            rating={rating}
            numberOfStars={10}
            starDimension="17px"
            starSpacing="2px"
          />
        </div>
      </div>
      <div>{category}</div>
    </div>
  );
}

export default RatedMovies;
