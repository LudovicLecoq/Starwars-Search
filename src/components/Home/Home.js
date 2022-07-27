/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import './Home.css';
import { loadData } from '../../requests/SearchRequest';
import Header from '../Header/Header';
import FilterButton from '../FilterButton/FilterButton';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';

function Home() {

    const [currentData, setCurrentData] = useState([]);
    const [count, setCount] = useState(0);
    const [currentSearch, setCurrentSearch]= useState("");
    const [searchType, setSearchType] = useState("planets");
    const [currentType, setCurrentType] = useState("");
    const [error, setError] = useState(false);

    const getData = async (reset) => {
        if(currentSearch.length < 1){
            setError(true);
        } else {
            setError(false);
            reset && setCurrentSearch("");
            const data = await loadData(searchType, currentSearch);
            if(data.status === 200){
                setCurrentData(data.data.results);
                setCount(data.data.count);
                setCurrentType(searchType);
                console.log("newrendu");
            }
        }
    };

    return (
        <div className="Home">
            <Header />
            <FilterButton setSearch={setSearchType} setCount={setCount} setCurrentData={setCurrentData}  />
            <Search getData={getData} setCurrentSearch={setCurrentSearch} currentSearch={currentSearch} error={error} />
            <Results data={currentData} count={count} type={currentType} />
            <Footer />
        </div>
    );
}

export default Home;
