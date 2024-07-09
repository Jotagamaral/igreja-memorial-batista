import React from 'react';

const ChurchHistory = ({
  title,
  description,
  titleSize = "text-2xl",
  titleWeight = "font-bold",
  titleAlign = "text-center",
  titleFont = "font-inter",
  descriptionAlign = "text-left",
  descriptionSize = "text-base",
  descriptionWeight = "font-normal",
  descriptionFont = "font-montserrat"
}) => {
  return (
    <div>
      <h2
        className={`${titleSize} ${titleWeight} ${titleAlign} ${titleFont}`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p className={`${descriptionSize} ${descriptionWeight} ${descriptionAlign} ${descriptionFont}`}>
        {description}
      </p>
    </div>
  );
};

export default ChurchHistory;
