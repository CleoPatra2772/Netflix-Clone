import Banner from './Banner';
import './HomeScreen.css';
import NavBar from './NavBar';
const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            {/* NavBar */}
            <NavBar />
            
            {/* Banner */}
            <Banner />

            {/* Rwos */}
        </div>
    );
}

export default HomeScreen;