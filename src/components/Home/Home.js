/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './home.css';
import { loadData } from '../../requests/SearchRequest';
import Header from '../Header/Header';
import FilterButton from '../FilterButton/FilterButton';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Loading from '../Loading/Loading';

function Home() {

    const [currentData, setCurrentData] = useState([]);
    const [count, setCount] = useState(0);
    const [currentSearch, setCurrentSearch]= useState("");
    const [searchType, setSearchType] = useState("planets");
    const [currentType, setCurrentType] = useState("");
    const [loadMore, setLoadMore] = useState("");
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false);

    const getData = async (reset) => {
            setLoad(true);
            setPage(1);
            reset && setLoadMore(currentSearch);
            reset && setCurrentSearch("");
            const data = await loadData(searchType, currentSearch, 1);
            if(data.status === 200){
                setCurrentData(data.data.results);
                setCount(data.data.count);
                setCurrentType(searchType);
                setLoad(false);
                console.log("newrendu", data.data.results);
            }
    };

    const PrevAndNextData = async () => {
        setLoad(true);
        const data = await loadData(searchType, loadMore, page);
        if(data.status === 200){
            setCurrentData(data.data.results);
            setLoad(false);
        }
    }

    const nextResults = () => {
        setPage(page +1);
    }

    const previousResults = () => {
      setPage(page -1);
    }

    useEffect(() => {
    if(loadMore){
        PrevAndNextData();
    }
    }, [page])
    

    return (
        <div className="home">
            <Header />
            <main className='home-content'>
                <FilterButton setSearch={setSearchType} setCount={setCount} setCurrentData={setCurrentData} />
                <Search getData={getData} setCurrentSearch={setCurrentSearch} currentSearch={currentSearch} />
                {load? <Loading />
                : 
                    <Results data={currentData} count={count} type={currentType} />
                }
                {page > 1 &&  <button className='home-page-btn prev' onClick={previousResults}>prev</button> }
                {page * 10 < count && <button className='home-page-btn next' onClick={nextResults}>next</button> }   

            </main>
        </div>
    );
}

export default Home;
