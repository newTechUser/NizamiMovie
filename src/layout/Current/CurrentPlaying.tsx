import MediaCard from "@/components/Card/Card";
import { films } from "@/db/films";
import "../Coming/ComingSoon.scss";

const CurrentPlaying = () => {
    return (
        <div className='comingSoon__container'>
            <p className='comingSoon__container-title'>Currently playing</p>
            <div className='comingSoon__container-cards'>
                {films.map((item) => (
                    <>
                        <MediaCard {...item} />
                    </>
                ))}
            </div>
        </div>
    );
};

export default CurrentPlaying;
