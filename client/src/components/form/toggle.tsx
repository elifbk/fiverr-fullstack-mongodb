import React, { type FC } from "react";

interface Props {
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle: FC<Props> = ({ setIsSeller }) => {
  return (
    <div className=" mb-5 flex items-center justify-between">
      <label htmlFor="toggler">Activate Seller Account</label>

      <div>
        <label className="switch">
          <input
            type="checkbox"
            name="isSeller"
            value="true"
            onChange={(e) => setIsSeller(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
