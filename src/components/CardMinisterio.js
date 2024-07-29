import React from 'react';

const CardMinisterio = ({ title, description, lider, contact }) => {
  return (
    <div className="p-4 m-2 shadow-md border-2 border-custom-blue w-full flex flex-col justify-between">
      <div className="flex-grow">
        <h2 className="text-left text-lg text-custom-blue font-bold font-inter pb-2">{`- ${title}`}</h2>
        <p className="text-justify text-base text-custom-blue font-bold font-montserrat">{description}</p>
      </div>
      <div className="mt-4">
        {lider && <p className="text-justify text-base text-custom-blue font-bold font-montserrat">{`Líder: ${lider}`}</p>}
        {contact && <p className="text-justify text-base text-custom-blue font-bold font-montserrat">{`Contato: ${contact}`}</p>}
      </div>
    </div>
  );
};

export default CardMinisterio;
