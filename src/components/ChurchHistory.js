import React from 'react';

const ChurchHistory = ({ title, description, titleSize, titleWeight, titleAlign, descriptionSize, descriptionWeight, descriptionAlign }) => (
  <div className="mb-8">
    <h2 className={`mb-4 ${titleSize} ${titleWeight} ${titleAlign}`}>{title}</h2>
    <p className={`${descriptionSize} ${descriptionWeight} ${descriptionAlign}`}>{description}</p>
  </div>
);

export default ChurchHistory;
