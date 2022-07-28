import {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import './characterCard.css';

export default function CharacterCard({item, type}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        console.log("opemModal", item)
    }

    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <>
            <li className="character-item" onClick={openModal}>
                <p>{item.name}</p>
            </li>
            <Modal modalIsOpen={showModal}  closeModal={closeModal} type={type} item={item} />
        </>
    )
}

CharacterCard.propTypes = {
    item: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
}