import Count from '../Count/Count';
import PlanetCard from '../PlanetCard/PlanetCard';
import CharacterCard from '../CharacterCard/CharacterCard';
import './results.css';

export default function Results({data, count, type}) {

    return (
        <div className="results-container">
            <Count count={count} />
            <ul className="results-list">
                {data && data.map((el, index) => (
                    type === "planets" ? 
                        <PlanetCard 
                            key={el.name+index} 
                            item={el} 
                            type={type} 
                        /> 
                    :
                        <CharacterCard 
                            key={el.name+index} 
                            item={el} 
                            type={type}
                        />
                ))}
            </ul>
        </div>
    )
}
