import React from 'react';

export default function Search({getData}) {
    const submitSearch = (e) => {
        e.preventDefault();
        getData();
    }
    return (
        <div className="search-container">
            <form onSubmit={submitSearch}>
                <button>valider</button>
            </form>
        </div>
    )
}
