import React from 'react'
import { headingFont } from '../../lib/fonts';

const DetailSection = ({ label, content }) => {
  if (!content) return null;

  return (
    <>
      <h1 className={`!text-lg mt-4 ${headingFont}`}>{label}</h1>
      <p className="mt-2 whitespace-pre-line">{content}</p>
    </>
  );
}

export default DetailSection