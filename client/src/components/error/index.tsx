import React, { type FC } from "react";

interface Props {
  message?: string;
  refetch?: () => void;
}

const Error: FC<Props> = ({ message, refetch }) => {
  return (
    <div className="warning bg-red-500/70">
      <p className="font-semibold">
        {message || "We're sorry, an error occurred."}
      </p>

      <p className="my-5">Please try again.</p>

      {refetch && (
        <button
          onClick={refetch}
          className="border rounded-md px-2 py-1 bg-white text-red-400"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
