import Navbar from '../layouts/Navbar';
import HomePresentation from '../components/Home/HomePresentation';
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