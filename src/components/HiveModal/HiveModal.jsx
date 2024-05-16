import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBg = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0; 
  top: 0;
  z-index: 1000;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  background-color: white;
  width: 50%;
  height: 50%;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

function HiveModal({ showModal, onClose, modalTitle, children }) {
    return showModal ? (
        <ModalBg onClick={onClose} role="dialog" aria-modal="true">
            <ModalBody onClick={(e) => e.stopPropagation()} className="border border-zinc-950 rounded-md">
                <CloseButton onClick={onClose} aria-label="Close Modal">&times;</CloseButton>
                <h1 className='text-xl font-bold'>{modalTitle}</h1>
                <hr className='my-2'></hr>
                {children}
            </ModalBody>
        </ModalBg>
    ) : null;
}

// HiveModal.propTypes = {
//     showModal: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
//     children: PropTypes.node
// };

export default HiveModal;
