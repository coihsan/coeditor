import React from "react";
import { isMobile } from 'react-device-detect'
import MobileNotice from "./mobile-notice";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { GitHub } from "@/assets/github";
import { ChevronRight12Filled } from "@fluentui/react-icons";

const LandingPage: React.FC = () => {

    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center px-6">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-background dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="flex flex-col mb-5">
                <h1 className="text-5xl font-bold text-center">The Note Taking App <br /> for Everyone</h1>
            </div>
            {isMobile ? (
                <MobileNotice />
            ) : (
                <div className="p-5 max-w-screen-sm flex flex-col items-center justify-center">
                    <p className="text-center text-muted-foreground text-sm md:text-base">Conotes is only available as a demo. Your notes will be saved to client-side storage and not persisted in any database or cloud.</p>
                    <div className="flex gap-2 pt-5">
                        <Link className="w-full flex items-center gap-2" to="/app">
                            <Button className="flex items-center justify-center gap-2 rounded-xl" variant={'default'} size={"default"}>
                                Get Started
                                <ChevronRight12Filled />
                            </Button>
                        </Link>
                        <Link className="w-full" target="_blank" to="https://github.com/coihsan/coeditor">
                            <Button className="flex items-center justify-center gap-2 rounded-xl" variant={'secondary'} size={"default"}>
                                <GitHub />
                                View on GitHub
                            </Button>
                        </Link>
                    </div>
                </div>
            )
            }
            <div className="pt-9">
                <h1 className="text-3xl font-semibold">Features :</h1>
                <ul className="md:text-lg text-muted-foreground mt-2 list-[square] pt-4">
                    <li><b className="text-black dark:text-white">100% Open-source</b></li>
                    <li><b className="text-black dark:text-white">No Ads / Advertising</b></li>
                    <li><b className="text-black dark:text-white">No tracking or analytics</b></li>
                    <li><b className="text-black dark:text-white">Support </b><Link className="text-sky-500 hover:underline" target='_blank' to={'https://en.wikipedia.org/wiki/WYSIWYG'}>WYSIWYG</Link> </li>
                    <li><b className="text-black dark:text-white">No database</b> – all notes are only stored in client-side storage <Link className="text-sky-500 hover:underline" target='_blank' to={'https://en.wikipedia.org/wiki/Indexed_Database_API'}> (indexedDB)</Link></li>
                    <li><b className="text-black dark:text-white">No login</b> – only available for demo user w/o login or signup (for now)</li>
                    <li><b className="text-black dark:text-white">Search notes</b> – easely search all notes, or notes with specific tag</li>
                </ul>
            </div>
        </section>
    )
}

export default LandingPage;