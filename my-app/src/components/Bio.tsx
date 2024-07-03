import React from "react";

interface BioProps {
  title: string;
  content: string;
}

export default function Bio({ title, content }: BioProps) {
  return (
    <div className="content">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
