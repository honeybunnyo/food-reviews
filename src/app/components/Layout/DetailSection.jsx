import React from 'react'
import { headingFont } from '../../lib/fonts';
const LIST_STYLES = {
  // Recipe
  recipe: "bullet",
  method: "number",

  // Restaurant
  entrée: "dish",
  main: "dish",
  dessert: "dish",

  // text
  description: "text",
  review: "text",
  location: "text",
  priceRange: "text",
  notes: "text",
};

const DetailSection = ({ label, content }) => {
  if (!content) return null;

  const isArray = Array.isArray(content);
  const style = LIST_STYLES[label.toLowerCase()] || "text";
  return (
    <div className='px-12'>
      <h1 className={ `!text-lg mt-4 ${headingFont}` }>{ label }</h1>

      { isArray ? (
        style === "number" ? (
          <ol className="mt-2 list-decimal pl-5 space-y-1">
            { content.map((item, i) => (
              <li key={ i }>{ item }</li>
            )) }
          </ol>
        ) : style === "bullet" ? (
          <ul className="mt-2 list-disc pl-5 space-y-1">
            { content.map((item, i) => (
              <li key={ i }>{ item }</li>
            )) }
          </ul>
        ) : style === "dish" ? (
          <div className="mt-2 space-y-4">
            { content.map((dish, i) => (
              <div key={ i }>
                <p className="font-semibold">{ dish.name }</p>
                <p className="text-sm opacity-80">{ dish.review }</p>
                <p className="text-sm opacity-80">{ dish.rating }/5</p>
              </div>
            )) }
          </div>
        ) : (
          <div className="mt-2 space-y-2">
            { content.map((item, i) => (
              <p key={ i }>{ item }</p>
            )) }
          </div>
        )
      ) : (
        <p className="mt-2 whitespace-pre-line">{ content }</p>
      ) }

    </div>
  );
};


export default DetailSection;
