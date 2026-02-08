import Navbar from './components/Navbar';
import Categories from './components/Categories';
import SaleImg from './components/SaleImg';
import Recommended from './components/Recommended';
import Topics from './components/Topics';
import Popular from './components/Popular';
import Footer from './components/Footer';

function App(){
    return(
        <>
            <Navbar></Navbar>
            <Categories></Categories>
            <SaleImg></SaleImg>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}
export default App;