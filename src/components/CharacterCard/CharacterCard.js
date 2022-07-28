import {useState} from 'react';
import Modal from '../Modal/Modal';
import './characterCard.css';

export default function CharacterCard({item, type}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        console.log("opemModal")
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
