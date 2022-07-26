import './Home.css';
import { loadData } from '../../requests/SearchRequest';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';

function Home() {

    const getData = async () => {
        const data = await loadData();
        console.log(data);
    }

    return (
        <div className="Home">
        <Header />
        <Search getData={getData}/>
        <Results />
        <Footer />
        </div>
    );
}

export default Home;
