/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
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
    const [currentSearch, setCurrentSearch]= useState("")
    const [searchType, setSearchType] = useState("planets");
    const [currentType, setCurrentType] = useState("planets");

    const getData = async (reset) => {
        reset && setCurrentSearch("");
        const data = await loadData(searchType, currentSearch);
        if(data.status === 200){
            setCurrentData(data.data.results);
            setCount(data.data.count);
            setCurrentType(searchType);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    

    return (
        <div className="Home">
            <Header />
            <FilterButton setSearch={setSearchType} search={searchType} getData={getData}  />
            <Search getData={getData} setCurrentSearch={setCurrentSearch} currentSearch={currentSearch} />
            <Results data={currentData} count={count} type={currentType} />
            <Footer />
        </div>
    );
}

export default Home;
