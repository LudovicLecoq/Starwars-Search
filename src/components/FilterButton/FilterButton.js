/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import './filterButton.css';

export default function FilterButton({setSearch, setCount, setCurrentData}) {

    const [buttonValue, setButtonValue] = useState({
        activeButton: null,
        buttons: [
            {id:1, value:"planets", txt:"planets"}, 
            {id:2, value:"people", txt:"characters"}
        ]
    });

    const toggleActive = (index, value) => {
        setButtonValue({...buttonValue, activeButton: buttonValue.buttons[index]});
        setSearch(value);
        setCount(0);
        setCurrentData([]);
    };

    const toggleActiveStyle = (index) => {
        if (buttonValue.buttons[index] === buttonValue.activeButton){
            return "active button";
        } else {
            return "button";
        }
    };

    useEffect(() => {
        toggleActive(0, buttonValue.buttons[0].value);
        toggleActiveStyle(0);
    }, []);
    

    return (
        <div className="filter-button-container">
            {buttonValue.buttons.map((el, index) => (
                <button key={el.id+index} className={toggleActiveStyle(index)} onClick={()=> toggleActive(index, el.value)}>{el.txt}</button>
            ))}
        </div>
    )
}
