import HomePresentation from '../components/Home/HomePresentation';
import Navbar from '../layouts/Navbar';
import "../styles/GeneralStyle.css";
import "../styles/HomeStyle.css";

function Home() {
  return (
    <>
        <Navbar />
        <HomePresentation />
        <HomePresentation />
        
    </>
  );
}

export default Home;