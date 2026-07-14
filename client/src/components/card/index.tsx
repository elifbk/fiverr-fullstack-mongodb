import React, { type FC } from "react";
import type { Gig } from "../../types";
import { Link } from "react-router-dom";
import Rating from "./rating";
import DeleteButton from "./delete-button";
import { getProfilePicture } from "../../utils/helpers";

interface Props {
  item: Gig;
  expand?: boolean;
}

const Card: FC<Props> = ({ item, expand }) => {
  return (
    <div className="bg-gray-100/50 rounded-lg p-5">
      <DeleteButton id={item.id} show={expand} />
      <Link
        to={`/detail/${item.id}`}
        className="p-2 rounded-md flex flex-col gap-2 group"
      >
        <img
          src={item.coverImage}
          alt={item.title}
          className="size-full object-cover rounded-md max-h-50"
        />

        <div className="flex gap-2 items-center">
          <img
            src={getProfilePicture(item.user.profilePicture)}
            alt={item.user.username}
            className="size-8 rounded-full"
          />
          <p>
            <span className="text-gray-500 ps-1">Created by </span>
            <span className="font-semibold">{item.user.username}</span>
          </p>
        </div>

        <h2 className="line-clamp-2 group-hover:underline">{item.title}</h2>

        <Rating
          rating={item.starCount}
          reviews={item.reviewCount}
          design="font-semibold text-lg"
        />

        <p>
          <span className="text-gray-500">from </span>
          <span className="font-semibold">
            ${item.packagePrice.toLocaleString()}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Card;
