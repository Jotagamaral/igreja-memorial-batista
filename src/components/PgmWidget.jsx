import React, { useState } from 'react';
import PgmPopup from './PgmPopup';
import PgmModal from './PgmModal';

const PgmWidget = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isPopupMinimized, setIsPopupMinimized] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsPopupVisible(false); // Esconde o pop-up completamente enquanto a modal está aberta
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha a modal
    setIsPopupVisible(true); // Traz o pop-up de volta
    setIsPopupMinimized(true); // Garante que ele volte no formato de botão flutuante (bolinha)
  };

  return (
    <>
      {isPopupVisible && (
        <PgmPopup 
          isMinimized={isPopupMinimized}
          onMinimize={() => setIsPopupMinimized(true)}
          onMaximize={() => setIsPopupMinimized(false)}
          onLearnMore={handleOpenModal} 
        />
      )}
      {isModalOpen && (
        <PgmModal onClose={handleCloseModal} />
      )}
    </>
  );
};

export default PgmWidget;