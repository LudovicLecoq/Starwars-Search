import React from 'react';
import Modal from 'react-modal';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import CharacterDetails from '../CharacterDetails/CharacterDetails';

import './modal.css';

export default function CharacterModal({modalIsOpen, setModalIsOpen, type, item}) {
        Modal.setAppElement(document.getElementById('root'));

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }
    return (
        <Modal
        isOpen={modalIsOpen}
        className='Modal'
        overlayClassName='Overlay'
        onRequestClose={handleCloseModal}
    >
        <button className="close" onClick={handleCloseModal}>close</button>
        
        {type === "planets" ? <PlanetDetails item={item} /> : <CharacterDetails item={item} /> }
        
    </Modal>
    )
}
