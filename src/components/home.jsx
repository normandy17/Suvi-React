import React from 'react';
import { CssBaseline } from "@material-ui/core";
import Navbar from "./navbar";
import Footer from './footer';
import LearningGuideContainer from './contentContainers/learningGuide';
import CoursesContainer from './contentContainers/courses';
import SourcesContainer from './contentContainers/sources';
import Banner from './banner';
import Welcome from './welcome';
import LearningPolicyContainer from './learningPolicy';
import HelpContainer from './help';


export default function Home() {

    return (
        <div className="Home">
            <CssBaseline />
            <Navbar />
            <Banner />            
            <Welcome />
            <LearningGuideContainer />
            <CoursesContainer />
            <SourcesContainer />
            <LearningPolicyContainer />
            <HelpContainer />
            <Footer />
        </div>
    );
}
