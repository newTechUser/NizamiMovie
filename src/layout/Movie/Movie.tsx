import React from "react";
import "./Movie.scss";
import { Link } from "react-router-dom";

interface MovieProps {
    title: string;
    poster: string;
    isClicked: boolean;
    onClick: () => void;
}

const Movie: React.FC<MovieProps> = ({ title, poster, isClicked, onClick }) => {
    return (
        <div className={`movie ${isClicked ? "clicked" : ""}`} onClick={onClick}>
            <img src={poster} alt={title} />
            <div className='overlay'>
                <div className='movie-title'>{title}</div>
                <button className='book-now'>
                    <Link to='/order'>Book Now</Link>
                </button>
            </div>
        </div>
    );
};

export default Movie;
