import React, { type FC } from "react";
import { FaTrash } from "react-icons/fa";
import { useDeleteGig } from "../../service/gig";
import Loader from "../loader";

interface Props {
  id: string;
  show: boolean;
}

const DeleteButton: FC<Props> = ({ id, show }) => {
  const { isPending, mutate } = useDeleteGig();

  if (!show) return;

  return (
    <div className="flex justify-end px-2 ">
      <button
        disabled={isPending}
        onClick={() => mutate(id)}
        className="button bg-red-100 cursor-pointer"
      >
        {isPending ? (
          <Loader designs="!text-lg !text-black" />
        ) : (
          <FaTrash color="red" />
        )}
      </button>
    </div>
  );
};

export default DeleteButton;
