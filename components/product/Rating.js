import {HalfStar, Star} from "../../assets/icons/components/star";

const Rating = ({ rating, size=1 }) => {
  if (!rating) return <div>Not Rated</div>;

  const intPart = Math.floor(rating);
  const fracPart = rating - intPart;
  const ratingArr = [];
  for (let i = 1; i <= intPart; i++) {
    ratingArr.push(
      <Star size={size} key={i}/>
    );
  }
  if (fracPart) {
    ratingArr.push(
      <HalfStar size={size} key={0}/>
    );
  }
  return ratingArr;
};

export default Rating;
