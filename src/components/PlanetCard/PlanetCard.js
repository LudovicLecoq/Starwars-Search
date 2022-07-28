import {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import './planetCard.css'

export default function PlanetCard({item, type}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        console.log(item);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <li className="planet-item" onClick={openModal}>
                <p>{item.name}</p>    
            </li>
            {showModal && <Modal modalIsOpen={showModal} closeModal={closeModal} type={type} item={item} />}
        </>
    )
}

PlanetCard.propTypes = {
    type: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
}