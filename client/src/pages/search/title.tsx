import React, { type FC } from "react";
import type { FilterParams } from "../../types";

const Title: FC<FilterParams> = ({ search, category }) => {
  return (
    <h1>
      {search ? (
        <p>
          Results for <span className="font-bold">{search}</span>
        </p>
      ) : category ? (
        <p>
          Results for the <span className="font-bold">{category}</span> category
        </p>
      ) : (
        <p className="font-bold">All results</p>
      )}
    </h1>
  );
};

export default Title;
