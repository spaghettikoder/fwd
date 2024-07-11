"use client";
import React from 'react';

interface ComicProps {
  comicData: {
    img: string;
    title: string;
    day: number;
    month: number;
    year: number;
    alt: string;
  };
}

export default function Comic({ comicData }: ComicProps) {
  const { img, title, day, month, year, alt } = comicData;
  const date = new Date(year, month - 1, day);

  return (
    <div className="comic-container">
      <h3 id="comic-title">{title}</h3>
      <img id="comic-image" src={img} alt={alt} />
      <p id="comic-date">uploaded on: {date.toLocaleDateString()}</p>
    </div>
  );
}
