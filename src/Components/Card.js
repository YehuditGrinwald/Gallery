import React from "react";

const Card = ({ record }) => {
  return (
    <div className='p-3 mx-auto border-solid border-2 border-gray-600 bg-white h-64 shadow-xl mx-auto rounded-sm w-middle h-box'>
      <img className="" src={record?.image?.url} />
      <h1 className="text-l text-grey-900 leading-normal font-bold m-1 text-lg">{record?.headline}</h1>
      <h3 className="text-pink-500 truncate">{record?.subHeadline}</h3>
    </div>
  );
};

export default Card;
