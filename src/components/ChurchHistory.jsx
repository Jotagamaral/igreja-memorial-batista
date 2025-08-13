import React from 'react';

const ChurchHistory = ({
  title,
  description,
  titleSize="text-2xl",
  titleWeight="font-bold",
  titleAlign="text-center",
  titleFont="font-arya",
  titleColor='text-black',
  descriptionAlign="text-left",
  descriptionSize="text-base",
  descriptionWeight="font-normal",
  descriptionFont= "font-poppins",
  descriptionColor='text-black'
}) => {
  return (
    <div>
      <h2
        className={`${titleSize} ${titleWeight} ${titleAlign} ${titleFont} ${titleColor} pb-2`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p className={`${descriptionSize} ${descriptionWeight} ${descriptionAlign} ${descriptionFont} ${descriptionColor}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

export default ChurchHistory;
