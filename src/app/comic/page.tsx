import React from 'react';
import Comic from '../../components/Comic';
import { comicEmail } from '../../data/data';

const fetchComicData = async (email: string) => {
  const params = new URLSearchParams({ email });

  const res = await fetch(`https://fwd.innopolis.university/api/hw2?${params}`);
  const comic_id = await res.text();

  const resData = await fetch(
    `https://fwd.innopolis.university/api/comic?id=${comic_id}`
  );
  const comicData = await resData.json();

  return comicData;
};

export default async function ComicPage() {
  const comicData = await fetchComicData(comicEmail);

  return <Comic comicData={comicData} />;
}
