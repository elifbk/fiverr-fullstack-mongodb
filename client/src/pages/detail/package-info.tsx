import React, { type FC } from "react";
import type { Gig } from "../../types";
import {
  IoIosArrowDown,
  IoIosInformationCircleOutline,
  IoMdCheckmark,
} from "react-icons/io";
import { FaArrowRight, FaRecycle, FaRegClock } from "react-icons/fa";

interface Props {
  gig: Gig;
}

const PackageInfo: FC<Props> = ({ gig }) => {
  return (
    <div className="h-fit flex flex-col gap-6 border shadow rounded-md p-5 md:mt-20 md:sticky md:top-20 border-zinc-200 md:max-w-95">
      <div className="flex  justify-between font-semibold gap-10">
        <h2 className="text-xl">{gig.packageTitle}</h2>
        <p className="text-xl font-normal flex items-center gap-2">
          ${gig.packagePrice}{" "}
          <IoIosInformationCircleOutline title="Prices may vary." />
        </p>
      </div>

      <p className="text-gray-600 text-lg">{gig.description}</p>

      <div className="flex gap-5 font-semibold text-sm whitespace-nowrap">
        <p className="flex items-center gap-2">
          <FaRegClock className="text-lg" /> Delivery in {gig.packageDuration}{" "}
          days
        </p>

        <p className="flex items-center gap-2">
          <FaRecycle className="text-lg" />
          {gig.packageRevision} Revision
        </p>
      </div>

      <ul>
        {gig.packageFeatures.map((i) => (
          <li className="flex items-center gap-2">
            <IoMdCheckmark className="text-black " />
            <span className="text-gray-500">{i}</span>
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-3 bg-black text-white p-2 rounded-md hover:bg-zinc-700 md:min-w-87.5">
        <span className="flex-1 font-semibold">Continue</span>
        <FaArrowRight />
      </button>

      <button className="flex items-center gap-3 bg-white text-black p-2 rounded-md border border-zinc-300hover:bg-zinc-200 md:min-w-87.5">
        <span className="flex-1 font-semibold">Get In Touch</span>
        <IoIosArrowDown />
      </button>
    </div>
  );
};

export default PackageInfo;
