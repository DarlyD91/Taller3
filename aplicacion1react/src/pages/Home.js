import Banner from "../components/banner/Banner";
import Descripcion from "../components/descripcion/Descripcion";
import Feature from "../components/feature/Feature";
import Navbar from "../components/navbar/Nabvar";
function Home(){
    return(
        <>
            <Navbar/>
            <Banner/>
            <Descripcion/>
            <Feature/>
        </>
    );
}

export default Home;