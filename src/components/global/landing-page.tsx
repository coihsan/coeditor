import React from "react";
import { isMobile } from 'react-device-detect'
import MobileNotice from "./mobile-notice";

const LandingPage : React.FC = () =>{

    return(
        <section>
            <h1>CoEditor</h1>   
            <p>A web-based notes app for everyone</p>
            {isMobile ? (
                <MobileNotice />
            ) : (
                <a className="button" href="/app">View Demo</a>
            )
            }
        </section>
    )
}

export default LandingPage;