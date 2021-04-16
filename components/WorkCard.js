import React from 'react';

const Card = ({ image, job, width, border }) => {
  return (
    <div className="bg-white" style={{ width: (width) }}>
      <div>
        <img src={image} alt="image" className={`h-auto w-full rounded-lg ${border} `} />
      </div>
      <div className="mt-2">
        <h5 className="text-xl font-medium">{job}</h5>
      </div>
    </div>
  );
};

export default Card;
