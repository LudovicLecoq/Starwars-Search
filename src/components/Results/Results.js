import React from 'react';
import Count from '../Count/Count';
import PlanetCard from '../PlanetCard/PlanetCard';
import CharacterCard from '../CharacterCard/CharacterCard';

export default function Results({data, count, type}) {
    return (
        <div className="results-container">
            <Count count={count} />
            <ul className="results-list">
                {data &&  data.map((el, index) => (
                    type === "planets" ? 
                        <PlanetCard key={el.name+index} item={el} /> 
                    :
                        <CharacterCard key={el.name+index} item={el} />
                ))}
            </ul>
        </div>
    )
}
