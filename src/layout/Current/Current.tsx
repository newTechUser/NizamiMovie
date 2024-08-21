import MediaCard from "@/components/Card/Card";
import "./Current.scss";
import { films } from "@/db/films";
import { ReactComponent as SeeMore } from "@/assets/svg/vector.svg";
import { Link } from "react-router-dom";
import React from "react";

const Current = () => {
    return (
        <div className='container__current'>
            <div className='container__current-title'>
                <p>Currently playing</p>
                <div className='container__current-title-seeMore'>
                    <Link to='/current'>see more </Link>
                    {<SeeMore />}
                </div>
            </div>
            <div className='container__current-cards'>
                {films.slice(0, 4).map((item) => (
                    <React.Fragment key={item.id}>
                        <MediaCard {...item} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Current;
