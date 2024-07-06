// src/app/comic/page.tsx
"use client";
import React from 'react';
import Comic from '../../components/Comic';
import { comicEmail } from '../../data/data';

export default function ComicPage() {
  return <Comic email={comicEmail} />;
}
