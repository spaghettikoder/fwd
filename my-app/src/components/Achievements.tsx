import React from "react";

interface AchievementsProps {
  title: string;
  achievements: string[];
}

export default function Achievements({
  title,
  achievements,
}: AchievementsProps) {
  return (
    <div className="lists">
      <h1>{title}</h1>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}
