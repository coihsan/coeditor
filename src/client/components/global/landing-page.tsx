import React from "react";
import { isMobile } from 'react-device-detect'
import MobileNotice from "./mobile-notice";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { GitHub } from "@/assets/github";
import { ChevronRight12Filled } from "@fluentui/react-icons";

const LandingPage : React.FC = () =>{

    return(
        <section className="w-screen h-screen flex flex-col items-center justify-center px-6">
            <div className="flex flex-col mb-5">
                <h1 className="text-5xl font-bold text-center">The Note Taking App <br /> for Everyone</h1>   
                <p className="text-center mt-4 text-muted-foreground">A web-based notes app for everyone</p>
            </div>
            {isMobile ? (
                <MobileNotice />
            ) : (
                <div className="p-5 rounded-xl max-w-screen-sm bg-muted flex flex-col items-center justify-center">
                    <p className="text-center text-muted-foreground ">TakeNote is only available as a demo. Your notes will be saved to local storage and not persisted in any database or cloud.</p>
                    <div className="flex items-center gap-3">
                        <Link className="mt-5" to="/app">
                            <Button className="flex items-center gap-2" variant={'default'} size={"default"}>
                                Get Started
                                <ChevronRight12Filled />
                            </Button>
                        </Link>
                        <Link className="mt-5" to="/app">
                            <Button className="flex items-center gap-2" variant={'outline'} size={"default"}>
                                <GitHub />
                                View on GitHub
                            </Button>
                        </Link>
                    </div>
                </div>
            )
            }
        </section>
    )
}

export default LandingPage;