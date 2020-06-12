export const trackView = (adId: string) => {
  hubspotTrack('View', adId);
  googleAnalyticsTrack('View', adId);
};

export const trackClick = (adId: string, event?: MouseEvent) => {
  const timeForTrackingRequests = 150; // ms
  if (event) {
    event.preventDefault();
  }

  hubspotTrack('Click', adId);
  googleAnalyticsTrack('Click', adId);

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

const hubspotTrack = (type: 'Click' | 'View', adId: string) => {
  if (!(window as any)['_hsq']) {
    console.warn('Unable to track Hubspot event, _hsq not found', type, adId);
    return;
  }

  (window as any)['_hsq'].push(['trackEvent', {
    id: `Docs ad - ${type} - ${adId}`
  }]);
};

const googleAnalyticsTrack = (type: 'Click' | 'View', adId: string) => {
  if (!(window as any)['gtag']) {
    console.warn(
      'Unable to track Google Analytics event, gtag not found', type, adId
    );
    return;
  }

  (window as any)['gtag']('event', `Docs ad - ${type} - ${adId}`, {
    'event_category': `Docs ad - ${type}`,
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
