import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import React, { useEffect, useState } from 'react';
import { PrismicRichText } from '@prismicio/react';

export default function TOC({ toc, editUrl, ...props }) {
  const { prismicAds } = usePluginData('ionic-docs-ads');
  const [activeAd, setActiveAd] = useState<typeof prismicAds.data>();
  const location = useLocation();

  const isEmpty = toc.length <= 0;

  useEffect(() => {
    setActiveAd(prismicAds[Math.floor(Math.random() * prismicAds.length)].data);
  }, [location]);

  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <OriginalTOC toc={toc} {...props} />
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
    </div>
  );
}
