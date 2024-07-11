"use client";
import Head from "next/head";
import Achievements from "@/components/Achievements";
import Bio from "@/components/Bio";
import Projects from "@/components/Projects";
import {
  bioTitle,
  bioContent,
  projectTitle,
  projectList,
  achievementsTitle,
  achievementsList,
} from "@/data/data";

export default function Home() {
  return (
    <div className="content-page">
      <Head>
        <title>My Personal Website</title>
        <meta
          name="description"
          content="This is my personal website where I showcase my bio, projects, and achievements."
        />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="My Personal Website" />
        <meta
          property="og:description"
          content="This is my personal website where I showcase my bio, projects, and achievements."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
      </Head>
      <Bio title={bioTitle} content={bioContent} />
      <Projects title={projectTitle} projects={projectList} />
      <Achievements title={achievementsTitle} achievements={achievementsList} />
    </div>
  );
}
