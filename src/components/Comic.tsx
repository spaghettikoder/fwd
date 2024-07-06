"use client"
import React, { useEffect, useState } from "react";

interface ComicProps {
  email: string;
}

interface ComicData {
  img: string;
  title: string;
  day: number;
  month: number;
  year: number;
  alt: string;
}

export default function Comic({ email }: ComicProps) {
  const [comicData, setComicData] = useState<ComicData | null>(null);

  useEffect(() => {
    const fetchComic = async () => {
      const params = new URLSearchParams({ email });

      const res = await fetch(
        `https://fwd.innopolis.university/api/hw2?${params}`
      );
      const comic_id = await res.text();

      const resData = await fetch(
        `https://fwd.innopolis.university/api/comic?id=${comic_id}`
      );
      const comicData = await resData.json();

      setComicData(comicData);
    };

    fetchComic();
  }, [email]);

  if (!comicData) {
    return <p>Loading...</p>;
  }

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

