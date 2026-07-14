import React, { type FC } from "react";
import { infoItems } from "../../utils/constants";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Info: FC = () => {
  return (
    <div className="my-10 bg-green-800/70 rounded-md p-4 sm:p-6">
      <h1 className="text-3xl">
        <span className="font-extrabold">fiverr </span>
        <span className="">pro.</span>
      </h1>

      <p className="text-3xl font-light my-6 sm:my-8">
        Let experts find the right
        <span className="font-serif text-orange-700"> freelancer </span> for you
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {infoItems.map(({ title, text }, key) => (
          <div key={key}>
            <h5 className="font-semibold flex items-center gap-3">
              <BsFillPatchCheckFill />
              {title}
            </h5>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-6 sm:my-8 ">
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 ">
          Discover expert sourcing
        </button>
      </div>
    </div>
  );
};

export default Info;
