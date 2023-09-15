import React from 'react';

import "./best-practice-figure.css"

export default function BestPracticeFigure({
  text,
  doText,
  dontText,
  cautionText,
  doImage,
  dontImage,
  cautionImage
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
        { dontText && dontImage && <div className="best-practice__dont">
          <div className="best-practice__image-wrapper">
            {dontImage}
            <div className="best-practice__dont-text">Don't</div>
          </div>
          <p>{dontText}</p>
        </div> }
        { cautionText && cautionImage && <div className="best-practice__caution">
          <div className="best-practice__image-wrapper">
            {cautionImage}
            <div className="best-practice__caution-text">Caution</div>
          </div>
          <p>{cautionText}</p>
        </div> }
      </div>
    </div>
  )
}
