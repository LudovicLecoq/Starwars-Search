import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import Cross from '../../assets/cross.png'

import './modal.css';

export default function CharacterModal({modalIsOpen, closeModal, type, item}) {
        Modal.setAppElement(document.getElementById('root'));

    return (
        <Modal
            isOpen={modalIsOpen}
            className='Modal'
            overlayClassName='Overlay'
            onRequestClose={closeModal}
        >
            <button className="close" onClick={closeModal}><img className="modal-btn-close" src={Cross} alt="close button" /></button>
            {type === "planets" ? <PlanetDetails item={item} /> : <CharacterDetails item={item} /> } 
        </Modal>
    )
}

CharacterModal.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
}