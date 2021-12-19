const Rating = ({ rating }) => {
  if (!rating) return <div>Not Rated</div>;

  const intPart = Math.floor(rating);
  const fracPart = rating - intPart;
  const ratingArr = [];
  for (let i = 1; i <= intPart; i++) {
    ratingArr.push(
      <svg
        key={i}
        width="25"
        height="25"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_42_17)">
          <path
            d="M8.44823 4.37209L7.19875 6.90549L4.4032 7.31306C3.90188 7.38577 3.70096 8.00382 4.06452 8.3578L6.08704 10.3287L5.60867 13.1127C5.52257 13.616 6.05259 13.9929 6.49652 13.7576L8.9974 12.443L11.4983 13.7576C11.9422 13.991 12.4722 13.616 12.3861 13.1127L11.9078 10.3287L13.9303 8.3578C14.2938 8.00382 14.0929 7.38577 13.5916 7.31306L10.796 6.90549L9.54656 4.37209C9.32268 3.92051 8.67402 3.91477 8.44823 4.37209Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_42_17">
            <rect
              width="11.0215"
              height="11.0215"
              fill="white"
              transform="translate(3.48438 3.41895)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (fracPart) {
    ratingArr.push(
      <svg
        key={0}
        width="25"
        height="25"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_42_29)">
          <path
            d="M8.92318 4.03125C8.70504 4.03125 8.48691 4.14414 8.37402 4.37184L7.12453 6.90525L4.32898 7.3109C3.82766 7.38361 3.62675 8.00166 3.9903 8.35565L6.01282 10.3265L5.53446 13.1106C5.44835 13.61 5.97455 13.9908 6.4223 13.7554L8.92318 12.4428V4.03125Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_42_29">
            <rect
              width="11.0215"
              height="11.0215"
              fill="white"
              transform="translate(3.41016 3.41895)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  return ratingArr;
};

export default Rating;
