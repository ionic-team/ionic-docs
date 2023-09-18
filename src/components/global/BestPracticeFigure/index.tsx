import React from 'react';

import './best-practice-figure.css';

export default function BestPracticeFigure({ text, doText, dontText, cautionText, doImage, dontImage, cautionImage }) {
  return (
    <div className="best-practice__container">
      <p>{text}</p>
      <div className="best-practice__do_dont">
        <figure className="best-practice__do">
          <div className="best-practice__image-wrapper">{doImage}</div>
          <figcaption>
            <div className="best-practice__do-text">Do</div>
            <p>{doText}</p>
          </figcaption>
        </figure>
        {dontText && dontImage && (
          <figure className="best-practice__dont">
            <div className="best-practice__image-wrapper">{dontImage}</div>
            <figcaption>
              <div className="best-practice__dont-text">Don't</div>
              <p>{dontText}</p>
            </figcaption>
          </figure>
        )}
        {cautionText && cautionImage && (
          <figure className="best-practice__caution">
            <div className="best-practice__image-wrapper">{cautionImage}</div>
            <figcaption>
              <div className="best-practice__caution-text">Caution</div>
              <p>{cautionText}</p>
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}
