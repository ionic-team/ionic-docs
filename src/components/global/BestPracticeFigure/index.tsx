import React, { type ReactNode } from 'react';

import styles from './styles.module.css';

/**
 * Usage:
 *
 * import BestPracticeFigure from '@components/global/BestPracticeFigure';
 *
 * <BestPracticeFigure
 *   text="..."
 *   doText="..."
 *   doNotText="..."
 *   doImage={<img alt="..." src={useBaseUrl(...)} />}
 *   doNotImage={<img alt="..." src={useBaseUrl(...)} />}
 * />
 *
 * All images must have alt text for screen readers.
 *
 * Custom HTML can also be passed to any of the text properties by using curly braces:
 *
 * text={<>My text with a <Link to="/api/note">link</Link></>}
 *
 * Markdown such as backticks will not be processed when using curly braces.
 * The <code> tag can be used instead:
 *
 * text={<>The <code>button</code> property</>}
 *
 * This component also supports a caution option. Typically you should use
 * either a "Don't" image or a "Caution" image but not both.
 *
 * <BestPracticeFigure
 *   text="..."
 *   doText="..."
 *   cautionText="..."
 *   doImage={<img alt="..." src={useBaseUrl(...)} />}
 *   cautionImage={<img alt="..." src={useBaseUrl(...)} />}
 * />
 *
 * @prop text - Text that describes the figure as a whole
 * @prop doText - Text that describes a best practice
 * @prop doNotText - Text that describes an anti-pattern
 * @prop cautionText - Text that describes something that could be an anti-pattern based on use case
 * @prop doImage - Image associated with doText
 * @prop doNotImage - Image associated with doNotText
 * @prop cautionImage - Image associated with cautionText
 */

export default function BestPracticeFigure({
  text,
  doText,
  doNotText,
  cautionText,
  doImage,
  doNotImage,
  cautionImage,
}: {
  text: ReactNode;
  doText: ReactNode;
  doNotText?: ReactNode;
  cautionText?: ReactNode;
  doImage: ReactNode;
  doNotImage?: ReactNode;
  cautionImage?: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <div className={styles.doDont}>
        <figure className={styles.do}>
          <div className={styles.imageWrapper}>{doImage}</div>
          <figcaption>
            <div className={styles.doText}>Do</div>
            <p>{doText}</p>
          </figcaption>
        </figure>
        {doNotText && doNotImage && (
          <figure className={styles.dont}>
            <div className={styles.imageWrapper}>{doNotImage}</div>
            <figcaption>
              <div className={styles.dontText}>Don't</div>
              <p>{doNotText}</p>
            </figcaption>
          </figure>
        )}
        {cautionText && cautionImage && (
          <figure className={styles.caution}>
            <div className={styles.imageWrapper}>{cautionImage}</div>
            <figcaption>
              <div className={styles.cautionText}>Caution</div>
              <p>{cautionText}</p>
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}
