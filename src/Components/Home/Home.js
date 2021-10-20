import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import SuccessStories from '../SuccessStories/SuccessStories';
import "./Home.css";
const Home = () => {
    return (
        <div>
          
            <div className="headline-design">
                <div className="heading-design">
                    <h1 className="header-design">Eye <span className="span-design"> Care </span></h1>
                    <p>Your eye's best friend</p>
                </div>
                <div>
                    <img className="banner-design" src="banner.jpg" alt="" />
                </div>
            </div>
            <h1 className="text-design">Our Services</h1>
            <Services></Services>
            <h1 className="text-design mt-5">About Us</h1>
            <AboutUs></AboutUs>
            <h1 className="text-design mt-5 mb-3">Help for the needed</h1>
             <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;