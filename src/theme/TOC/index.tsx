/**
 * This file wraps the original TOC so we don't need to modify the original code.
 *
 * Reasons for modifying:
 * - Add header to the top of the TOC.
 * - Add a `Edit this page` link to the bottom of the TOC.
 * - Add a random internal ad to the bottom of the TOC.
 */

import React, { useState, useEffect } from 'react';
import TOC from '@theme-original/TOC';
import type { Props } from '@theme/TOC';

import EditThisPage from '@theme-original/EditThisPage';
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import { PrismicRichText } from '@prismicio/react';
import { useDoc } from '@docusaurus/theme-common/internal';

interface TOCProps extends Props {
  editUrl: string;
}

export default function TOCWrapper(props: TOCProps): JSX.Element {
  const { prismicAds } = usePluginData('ionic-docs-ads') as any;
  const [activeAd, setActiveAd] = useState<typeof prismicAds.data>();
  const location = useLocation();
  const { metadata } = useDoc();

  const isEmpty = props.toc.length <= 0;

  useEffect(() => {
    setActiveAd(prismicAds[Math.floor(Math.random() * prismicAds.length)].data);
  }, [location]);

  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <TOC {...props} />
      <EditThisPage editUrl={metadata.editUrl} />
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
    </div>
  );
}
