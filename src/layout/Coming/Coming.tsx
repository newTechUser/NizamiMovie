import MediaCard from "@/components/Card/Card";
import "./Coming.scss";
import { films } from "@/db/films.ts";
import { ReactComponent as SeeMore } from "@/assets/svg/vector.svg";
import { Link } from "react-router-dom";
import React from "react";

const Coming = () => {
    return (
        <div className='container__coming'>
            <div className='container__coming-title'>
                <p>Coming soon</p>
                <div className='container__coming-title-seeMore'>
                    <Link to='/coming'>see more </Link>
                    {<SeeMore />}
                </div>
            </div>
            <div className='container__coming-cards'>
                {films.slice(0, 4).map((item) => (
                    <React.Fragment key={item.id}>
                        <MediaCard {...item} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Coming;
