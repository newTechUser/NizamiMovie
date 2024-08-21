import MediaCard from "@/components/Card/Card";
import { films } from "@/db/films";
import "./ComingSoon.scss";

const ComingSoon = () => {
    return (
        <div className='comingSoon__container'>
            <p className='comingSoon__container-title'>Coming soon</p>
            <div className='comingSoon__container-cards'>
                {films.map((item) => (
                    <div>
                        <MediaCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComingSoon;
