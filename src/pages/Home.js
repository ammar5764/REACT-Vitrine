import React from 'react';
import Buttons from '../component/Buttons';
import DynamicText from '../component/DynamicText';
import Mouse from '../component/Mouse';
import Navigations from '../component/Navigations';
import SignIn from '../component/SignIn';
import SocialNetwork from '../component/SocialNetwork';

const Home = () => {
    return (
        <div>
            <Mouse />
            <div className="home ">
                <Navigations />
                <SignIn/>
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>FS AGENCY</h1>
                        <h2>
                            <DynamicText />
                        </h2>
                    </div>
                </div>
                <Buttons right={"/projet-1"} />
            </div>

        </div>
    );
};

export default Home;