import PropTypes from 'prop-types';
import './search.css';

export default function Search({getData, currentSearch, setCurrentSearch}) {
    
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
                    <input id="search" type="text" placeholder="Search..." value={currentSearch} onChange={changeCurrentSearch} required />
                </label>
            </form>
        </div>
    )
}


Search.propTypes = {
    getData: PropTypes.func.isRequired,
    currentSearch: PropTypes.string.isRequired,
    setCurrentSearch: PropTypes.func.isRequired,
}