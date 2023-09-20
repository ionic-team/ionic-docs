import React from 'react';

import './best-practice-figure.css';

/**
 Usage:

 import BestPracticeFigure from '@components/global/BestPracticeFigure';

 <BestPracticeFigure
   text="..."
   doText="..."
   dontText="..."
   doImage={<img alt="..." src={useBaseUrl(...)} />}
   dontImage={<img alt="..." src={useBaseUrl(...)} />}
 />

 All images must have alt text for screen readers.

 Custom HTML can also be passed to any of the text properties by using curly braces:

 text={<>My text with a <a href="#">link</a></>}

 Markdown such as backticks will not be processed when using curly braces.
 The <code> tag can be used instead:

 text={<>The <code>button</code> property</>}

 This component also supports a caution option. Typically you should use
 either a "Don't" image or a "Caution" image but not both.

 <BestPracticeFigure
    text="..."
    doText="..."
    cautionText="..."
    doImage={<img alt="..." src={useBaseUrl(...)} />}
    cautionImage={<img alt="..." src={useBaseUrl(...)} />}
  />

  @prop text - Text that describes the figure as a whole
  @prop doText - Text that describes a best practice
  @prop dontText - Text that describes an anti-pattern
  @prop cautionText - Text that describes something that could be an anti-pattern based on use case
  @prop doImage - Image associated with doText
  @prop dontImage - Image associated with dontText
  @prop cautionImage - Image associated with cautionText
 */

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
