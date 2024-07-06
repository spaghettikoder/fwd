import Image from 'next/image';
import React from "react";

interface ContactProps {
  title: string;
  githubUrl: string;
  telegramUrl: string;
  emailUrl: string;
}

export default function Contact({
  title,
  githubUrl,
  telegramUrl,
  emailUrl,
}: ContactProps) {
  return (
    <div className="bottom-fixed-rectangle">
      <h2>{title}</h2>
      <div className="social-icons">
        <a href={githubUrl} target="_blank" title="GitHub">
          <img src="assets/images/gh.png" alt="GitHub Icon" />
        </a>
        <a href={telegramUrl} target="_blank" title="Telegram">
          <img src="assets/images/tg.png" alt="Telegram Icon" />
        </a>
        <a href={emailUrl} title="Email">
          <img src="assets/images/em.png" alt="Email Icon" />
        </a>
      </div>
    </div>
  );
}
