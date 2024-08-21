import React, { useState } from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import Movie from "../Movie/Movie";
import { movies } from "@/db/sliderMovies";

const Header: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState<string>("");
    const [clickedMovie, setClickedMovie] = useState<number | null>(null);

    const handleClick = (index: number) => {
        if (clickedMovie === index) {
            setClickedMovie(null);
            setBackgroundImage("");
        } else {
            setClickedMovie(index);
            setBackgroundImage(movies[index].poster);
        }
    };

    return (
        <div
            className='Header'
            style={{
                backgroundImage: `url(${backgroundImage || movies[0].poster})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
            }}
        >
            <div className='navbarContent'>
                <Navbar />
            </div>
            <div className='action'>
                <div className='action1'>
                    <svg width='100' height='1' viewBox='0 0 100 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <line y1='0.5' x2='100' y2='0.5' stroke='white' />
                    </svg>
                    TODAY
                </div>
                <div className='action2'>
                    <svg width='123' height='1' viewBox='0 0 123 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <line y1='0.5' x2='123' y2='0.5' stroke='white' />
                    </svg>
                    SOON
                </div>
            </div>
            <div className='movie-container'>
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        poster={movie.poster}
                        isClicked={clickedMovie === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Header;
