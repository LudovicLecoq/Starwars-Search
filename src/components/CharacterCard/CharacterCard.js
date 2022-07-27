import Modal from '../Modal/Modal'

export default function CharacterCard({item, type, openModal, showModal, setShowModal}) {

    return (
        <>
            <li className="character-item" onClick={openModal}>
                <p>{item.name}</p>
                <p>{item.height}</p>
                <p>{item.mass}</p>
                <p>{item.hair_color}</p>
                <p>{item.film}</p>
            </li>
            <Modal modalIsOpen={showModal} setModalIsOpen={setShowModal} type={type} item={item} />
        </>
    )
}
