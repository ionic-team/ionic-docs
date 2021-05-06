import { Build } from '@stencil/core';

export const trackView = (adId: string, location = 'Docs') => {
  if (!Build.isBrowser) { return; }
  hubspotTrack('View', adId, location);
  googleAnalyticsTrack('View', adId, location);
};

export const trackClick = (adId: string, event?: MouseEvent, location = 'Docs') => {
  if (!Build.isBrowser) { return; }
  const timeForTrackingRequests = 150; // ms
  if (event) {
    event.preventDefault();
  }

  hubspotTrack('Click', adId, location);
  googleAnalyticsTrack('Click', adId, location);

  // give tracking request time to complete
  setTimeout(() => {
    const link = hrefClimber(event?.target as Node);
    if (link.target && link.target.toLowerCase() === '_blank') {
      window.open(link.href);
    } else if (link.href) {
      document.location = link.href;
    }
  }, timeForTrackingRequests);
};

const hubspotTrack = (type: 'Click' | 'View', adId: string, location: string) => {
  const _hsq = ((window as any)._hsq = (window as any)._hsq || []);
  _hsq.push(['trackEvent', {
    id: `${location} ad - ${type} - ${adId}`
  }]);
};

const googleAnalyticsTrack = (type: 'Click' | 'View', adId: string, location: string) => {
  if (!(window as any)['gtag']) {
    console.warn(
      'Unable to track Google Analytics event, gtag not found', type, adId
    );
    return;
  }

  (window as any)['gtag']('event', `Docs ad - ${type} - ${adId}`, {
    'event_category': `${location} ad - ${type}`,
    'event_label': adId
  });
};

// recursive function to climb the DOM looking for href tags
const hrefClimber = (el: any): any => {
  if (el['href']) {
    return el;
  } else if (el.parentNode) {
    return hrefClimber(el.parentNode);
  }
};
