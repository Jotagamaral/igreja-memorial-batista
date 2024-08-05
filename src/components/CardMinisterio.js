import React from 'react';

const CardMinisterio = ({ title, description, lider, email, tel, image }) => {
  return (
    <div className="bg-white p-6 shadow-md flex flex-col justify-between rounded-lg h-full">
      <div className="flex-grow">
        <div className="flex items-start pb-4">
          {image && <img src={image} alt={title} className="w-20 h-20 object-cover rounded-lg mr-4" />}
          <h2 className="pt-4 text-left text-xl text-custom-blue font-bold font-inter">{title}</h2>
        </div>
        <p className="text-justify text-base text-gray-700 font-montserrat">{description}</p>
      </div>
      <div className="mt-4 text-left">
        {lider && <p className="text-sm text-gray-700 font-montserrat"><strong>Líder:</strong> {lider}</p>}
        {email && tel && (
          <>
            <p className="text-sm text-gray-700 font-montserrat"><strong>E-mail:</strong> {email}</p>
            <p className="text-sm text-gray-700 font-montserrat"><strong>Telefone:</strong> {tel}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardMinisterio;
