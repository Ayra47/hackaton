"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";

export default function CustomModal({modalIsOpen, closeModal, children}) {
    const [maxWidth, setMaxWidth] = useState('600px');

    const customStyles = {
        overlay: {
            background: "rgb(0 0 0 / 75%)",
        },
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: maxWidth,
            maxHeight: "80%",
            overflow: "auto",
        },
        modalContainer: {
            padding: "1rem",
        },
    };
    
    useEffect(() => {
        function handleResize() {
          const screenWidth = window.innerWidth;
          if (screenWidth < 768) {
            setMaxWidth('90%'); 
          } else {
            setMaxWidth('600px');
          }
        }
    
        handleResize(); // вызываем функцию при инициализации
        window.addEventListener('resize', handleResize); // добавляем слушатель события resize
    
        return () => {
          window.removeEventListener('resize', handleResize); // убираем слушатель при размонтировании компонента
        };
      }, []);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                {children}
            </Modal>
        </div>
    );
}
