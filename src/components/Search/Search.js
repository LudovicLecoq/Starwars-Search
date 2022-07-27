import React from 'react';

export default function Search({getData, currentSearch, setCurrentSearch, error}) {
    
    const submitSearch = (e) => {
        e.preventDefault();
        getData("reset");
    }

    const changeCurrentSearch = (e) => {
        setCurrentSearch(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div className="search-container">
            <form onSubmit={submitSearch}>
                <label htmlFor="search">
                    <input id="search" type="text" placeholder="&#128269; Search..." value={currentSearch} onChange={changeCurrentSearch} minLength="1" />
                </label>
            </form>
            {error && "Attention votre recherche doit faire au miminum 1 caractère"}
        </div>
    )
}
