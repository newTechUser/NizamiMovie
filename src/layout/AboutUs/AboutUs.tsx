import React from "react";
import "./AboutUs.scss";
import Img from "@/assets/imgs/aboutus/chairs.png";
import { ReactComponent as Logo } from "@/assets/svg/vector.svg";

const AboutUs: React.FC = () => {
    return (
        <div className='aboutUs'>
            <div className='aboutTextSide'>
                <div className='contentTitle'>About us</div>
                <div className='contentHead'>2008-2018</div>
                <div className='contentMain'>
                    According to the State Program for the Development of Azerbaijani Cinema for 2008-2018, Nizami, one of the oldest cinemas in the
                    country, was inaugurated on December 27, 2011 after major reconstruction. In addition to the current repertoire of films, which
                    includes the most interesting new films, presentations of national films...
                    <Logo />
                </div>
            </div>
            <div className='aboutImgSide'>
                <img className='img' src={Img} alt='chairs' />
            </div>
        </div>
    );
};

export default AboutUs;
