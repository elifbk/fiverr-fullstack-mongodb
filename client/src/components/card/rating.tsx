import React, { type FC } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  rating: number;
  reviews: number;
  design?: string;
}

const Rating: FC<Props> = ({ rating, reviews, design }) => {
  return (
    <div className={`flex gap-1 items-center ${design}`}>
      <FaStar />

      <span className="font-semibold">{rating}</span>
      <span className="text-gray-500 font-normal underline">({reviews})</span>
    </div>
  );
};

export default Rating;
