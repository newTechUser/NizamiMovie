import LastestNews from "@/layout/LatestNews/LastestNews";
import Pearls from "@/layout/Pearls/Pearls";
import AboutUs from "@/layout/AboutUs/AboutUs";
import Current from "@/layout/Current/Current";
import Coming from "@/layout/Coming/Coming";

const Home = () => {
    return (
        <div className='home'>
            <Current /> 
            <Coming /> 
            <Pearls />
            <AboutUs />
            <LastestNews />
        </div>
    );
};

export default Home;
