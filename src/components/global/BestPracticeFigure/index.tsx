import React from 'react';

import "./best-practice-figure.css"

export default function BestPracticeFigure({
  text,
  doText,
  dontText,
  doImage,
  dontImage
}) {
  return (
    <div className="best-practice__container">
      <p>{text}</p>
      <div className="best-practice__do_dont">
        <div className="best-practice__do">
          <div className="best-practice__image-wrapper">
            {doImage}
            <div className="best-practice__do-text">Do</div>
          </div>
          <p>{doText}</p>
        </div>
        <div className="best-practice__dont">
          <div className="best-practice__image-wrapper">
            {dontImage}
            <div className="best-practice__dont-text">Don't</div>
          </div>
          <p>{dontText}</p>
        </div>
      </div>
    </div>
  )
}
