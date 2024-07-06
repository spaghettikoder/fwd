"use client";
import Achievements from '@/components/Achievements';
import Bio from '@/components/Bio';
import Projects from '@/components/Projects';
import { bioTitle, bioContent, projectTitle, projectList, achievementsTitle, achievementsList } from '@/data/data';


export default function Home() {
  return (
    <div className='content-page'>
      <Bio title={bioTitle} content={bioContent} />
      <Projects title={projectTitle} projects={projectList} />
      <Achievements title={achievementsTitle} achievements={achievementsList} />
    </div>
  );
}
