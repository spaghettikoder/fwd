import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Comic from "./components/Comic";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import {
  achievementsList,
  achievementsTitle,
  bioContent,
  bioTitle,
  comicEmail,
  emailUrlContact,
  githubUrlContact,
  projectList,
  projectTitle,
  telegramUrlContact,
  titleContact,
} from './data';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Bio title={bioTitle} content={bioContent} />
                <Projects title={projectTitle} projects={projectList} />
                <Achievements
                  title={achievementsTitle}
                  achievements={achievementsList}
                />
              </>
            }
          />
          <Route path="/comic" element={<Comic email={comicEmail} />} />
        </Routes>
        <Contact
          title={titleContact}
          githubUrl={githubUrlContact}
          telegramUrl={telegramUrlContact}
          emailUrl={emailUrlContact}
        />
        <Footer />
      </div>
    </Router>
  );
}
