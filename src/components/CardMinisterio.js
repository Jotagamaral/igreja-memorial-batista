import React from 'react';

const CardMinisterio = ({ title, description }) => {
  return (
    <div className="p-4 m-2 shadow-md border-2 border-custom-blue h-64 w-56 flex flex-col justify-between">
      <div>
        <h2 className="text-left text-base text-custom-blue font-bold font-inter pb-2">{`- ${title}`}</h2>
        <p className="text-left text-sm text-custom-blue font-bold font-montserrat">{description}</p>
      </div>
    </div>
  );
};

export default CardMinisterio;