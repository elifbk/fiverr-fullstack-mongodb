import React, { type FC } from "react";
import type { User } from "../../types";
import { getProfilePicture } from "../../utils/helpers";
import Rating from "../../components/card/rating";
import { BsStarFill } from "react-icons/bs";
import { AiFillVideoCamera } from "react-icons/ai";

interface Props {
  user: User;
}

const UserInfo: FC<Props> = ({ user }) => {
  return (
    <div>
      <h1 className="font-bold text-xl mt-10 mb-3">
        Let's get to know {user.username}
      </h1>

      <div className="flex flex-col items-center gap-3">
        <img
          src={getProfilePicture(user.profilePicture)}
          alt={user.username}
          className="size-28 rounded-full object-cover"
        />

        <h4 className="font-semibold">{user.username}</h4>

        <p className="text-gray-600 font-light text-center">
          {user.description}
        </p>

        <div className="flex gap-5">
          <Rating rating={4.1} reviews={132} />

          <div className="flex items-center bg-orange-500/40 py-1 px-2 rounded-md">
            <span className="text-sm pe-1">Top Rated</span>

            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
      </div>

      <div className="flex gap-8 mt-5 font-semibold justify-center">
        <button className="py-2 px-5 border rounded-md hover:bg-zinc-100/50">
          Get in touch
        </button>

        <button className="py-2 px-5 border rounded-md hover:bg-zinc-100/50 flex items-center gap-2">
          <AiFillVideoCamera />
          Schedule a meeting
        </button>
      </div>

      <div className="border border-zinc-300 my-10 p-5 grid mg:grid-cols-2  gap-5 rounded-sm ">
        <div className="flex flex-col gap-1">
          <span className="text-gray-500">From Where</span>
          <span className="text-gray-700 font-semibold">{user.country}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-gray-500">Membership Date</span>
          <span className="text-gray-700 font-semibold">
            {new Date(user.createdAt).toLocaleDateString("en", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-gray-500">Phone</span>
          <span className="text-gray-700 font-semibold">{user.phone}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-gray-500">Email</span>
          <span className="text-gray-700 font-semibold">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
