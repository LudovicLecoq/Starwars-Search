import React, {useState} from 'react';
import Count from '../Count/Count';
import PlanetCard from '../PlanetCard/PlanetCard';
import CharacterCard from '../CharacterCard/CharacterCard';

export default function Results({data, count, type}) {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        console.log("opemModal")
    }

    return (
        <div className="results-container">
            <Count count={count} />
            <ul className="results-list">
                {data.length > 0 ?  data.map((el, index) => (
                    type === "planets" ? 
                        <PlanetCard 
                            key={el.name+index} 
                            item={el} 
                            type={type} 
                            openModal={openModal} 
                            showModal={showModal} 
                            setShowModal={setShowModal} 
                        /> 
                    :
                        <CharacterCard 
                            key={el.name+index} 
                            item={el} 
                            type={type}
                            openModal={openModal} 
                            showModal={showModal} 
                            setShowModal={setShowModal}  
                        />
                ))
            :"test"}
            </ul>
        </div>
    )
}
