import React from "react";

const Card = ({ record }) => {
  return (
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={record?.image?.url} />
        <div className="px-6 py-4">
          <div className="text-gray font-bold text-xl mb-2">{record?.headline}</div>
          <p className="text-light_gray text-base">{record?.subHeadline} </p>
        </div>
      </div>
  );
};

export default Card;
