import React from 'react';

const ChurchHistory = ({
  title,
  description,
  titleSize = "text-2xl",
  titleWeight = "font-bold",
  titleAlign = "text-center",
  titleFont = "font-inter",
  titleColor = 'text-black',
  descriptionAlign = "text-left",
  descriptionSize = "text-base",
  descriptionWeight = "font-normal",
  descriptionFont = "font-montserrat",
  descriptionColor = 'text-black'
}) => {
  return (
    <div>
      <h2
        className={`${titleSize} ${titleWeight} ${titleAlign} ${titleFont} ${titleColor}`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p className={`${descriptionSize} ${descriptionWeight} ${descriptionAlign} ${descriptionFont} ${descriptionColor}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

export default ChurchHistory;
