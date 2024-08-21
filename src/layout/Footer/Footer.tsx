import React from "react";
import "./Footer.scss";
import { ReactComponent as InstaWhite } from "@/assets/svg/instaWhite.svg";
import { ReactComponent as FbWhite } from "@/assets/svg/fbWhite.svg";
import { ReactComponent as TwitterWhite } from "@/assets/svg/twitterWhite.svg";

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='footerMain'>
                <div className='footItems'>
                    <div className='footTitle'>Profile</div>
                    <div className='footContent'>
                        <div className='footContents'>FAQ’s</div>
                        <div className='footContents'>Pricing plans</div>
                        <div className='footContents'>Order tracking</div>
                        <div className='footContents'>Returns</div>
                    </div>
                </div>
                <div className='footItems'>
                    <div className='footTitle'>Recent Posts</div>
                    <div className='footContent'>
                        <div className='footContents'>Touch of uniqueness</div>
                        <div className='footContents'>Offices you won’t forget</div>
                        <div className='footContents'>Cicilan</div>
                    </div>
                </div>
                <div className='footItems'>
                    <div className='footTitle'>Costumer</div>
                    <div className='footContent'>
                        <div className='footContents'>Help & contact us</div>
                        <div className='footContents'>Return</div>
                        <div className='footContents'>Online stores</div>
                        <div className='footContents'>Terms & cordition</div>
                    </div>
                </div>
                <div className='footItems'>
                    <div className='footTitle'>Contact</div>
                    <div className='footContentLogo'>
                        <div className='footContentsLogo'>{<InstaWhite />}</div>
                        <div className='footContentsLogo'>{<TwitterWhite />}</div>
                        <div className='footContentsLogo'>{<FbWhite />}</div>
                    </div>
                </div>
            </div>

            <div className='footerEnd'>
                <hr />
                <span> © 2014 Nizami cinema. All Right Reserved</span>
            </div>
        </div>
    );
};

export default Footer;
