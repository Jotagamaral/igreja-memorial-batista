import React, { useState } from 'react';
import PgmPopup from './PgmPopup';
import PgmModal from './PgmModal';

const PgmWidget = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsPopupVisible(false); // Esconde o pop-up quando a modal abre
  };

  return (
    <>
      {isPopupVisible && (
        <PgmPopup 
          onClose={() => setIsPopupVisible(false)} 
          onLearnMore={handleOpenModal} 
        />
      )}
      {isModalOpen && (
        <PgmModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default PgmWidget;