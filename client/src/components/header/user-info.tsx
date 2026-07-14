import React, { type FC } from "react";
import type { User } from "../../types";
import { Link } from "react-router-dom";
import { useLogout } from "../../service/auth";
import { getProfilePicture } from "../../utils/helpers";

interface Props {
  user: User;
}

const UserInfo: FC<Props> = ({ user }) => {
  const { isPending, mutate } = useLogout();

  const menuItems = [
    {
      label: "Profile",
      to: "/",
    },
    user.isSeller && {
      label: "Services",
      to: "/my-gigs",
    },
    user.isSeller && {
      label: "Add Service",
      to: "/add-gig",
    },
    {
      label: "Settings",
      to: "/",
    },
  ].filter(Boolean) as { to: string; label: string }[];

  return (
    <div className="relative group">
      <div className="flex justify-center items-center gap-2">
        <img
          src={getProfilePicture(user.profilePicture)}
          className="size-10 rounded-full object-cover"
        />
        <span className="font-semibold">{user.username}</span>
      </div>

      <div className="absolute hidden group-hover:flex flex-col w-37.5 text-[13px] top-10 -left-10 bg-gray-100 rounded-md text-center">
        {menuItems.map(({ label, to }, i) => (
          <Link to={to} key={i} className="header-link">
            {label}
          </Link>
        ))}

        <button
          onClick={() => mutate()}
          disabled={isPending}
          className="header-link"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
