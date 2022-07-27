import Modal from '../Modal/Modal';

export default function PlanetCard({item, type, openModal, showModal, setShowModal}) {
    return (
        <>
            <li className="planet-item" onClick={openModal}>
            alllooooo
            </li>
            <Modal modalIsOpen={showModal} setModalIsOpen={setShowModal} type={type} item={item} />
        </>
    )
}
