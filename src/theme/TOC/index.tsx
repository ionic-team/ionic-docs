import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type { Props } from '@theme/TOC';
import styles from '@docusaurus/theme-classic/src/theme/TOC/styles.module.css';

// CUSTOM CODE
import EditThisPage from '@theme-original/EditThisPage';
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import { PrismicRichText } from '@prismicio/react';

interface TOCProps extends Props {
  editUrl: string;
}
// CUSTOM CODE END

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({ className, editUrl, ...props }: TOCProps): JSX.Element {
  // CUSTOM CODE
  const { prismicAds } = usePluginData('ionic-docs-ads') as any;
  const [activeAd, setActiveAd] = useState<typeof prismicAds.data>();
  const location = useLocation();

  const isEmpty = props.toc.length <= 0;

  useEffect(() => {
    setActiveAd(prismicAds[Math.floor(Math.random() * prismicAds.length)].data);
  }, [location]);

  if (isEmpty) return null;
  // CUSTOM CODE END

  return (
    // CUSTOM CODE - toc wrapper
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
        <TOCItems {...props} linkClassName={LINK_CLASS_NAME} linkActiveClassName={LINK_ACTIVE_CLASS_NAME} />
      </div>
      {/* CUSTOM CODE  */}
      <EditThisPage editUrl={editUrl} />
      {activeAd && (
        <div className="internal-ad">
          <a
            href={activeAd.ad_url.url}
            target={activeAd.ad_url.target}
            // onClick={e => trackClick(activeAd.ad_id, e)}
          >
            {/* Reponsive image since Prismic supports it out of the box */}
            <picture>
              <source media="(min-width: 37.5em)" src={activeAd.ad_image.url} />
              <source src={activeAd.ad_image['1x'].url} />
              <img
                src={activeAd.ad_image.url}
                alt={activeAd.ad_image.alt}
                height={activeAd.ad_image['1x'].dimensions.height}
                width={activeAd.ad_image['1x'].dimensions.width}
              />
              <p>{activeAd.ad_image.alt}</p>
            </picture>
            <PrismicRichText field={activeAd.ad_copy} />
          </a>
        </div>
      )}
      {/* CUSTOM CODE END */}
    </div>
  );
}
