export const trackView = (adId: string) => {
  hubspotTrack('View', adId);
  googleAnalyticsTrack('View', adId);
};

export const trackClick = (adId: string, event?: MouseEvent) => {
  if (event) {
    event.preventDefault();
  }

  hubspotTrack('Click', adId);
  googleAnalyticsTrack('Click', adId);
};

const hubspotTrack = (type: 'Click' | 'View', adId: string) => {
  if (!window['_hsq']) {
    console.warn('Unable to track Hubspot event, _hsq not found', type, adId);
    return;
  }

  window['_hsq'].push(['trackEvent', {
    id: `Docs ad - ${type} - ${adId}`
  }]);
};

const googleAnalyticsTrack = (type: 'Click' | 'View', adId: string) => {
  if (!window['gtag']) {
    console.warn(
      'Unable to track Google Analytics event, gtag not found', type, adId
    );
    return;
  }

  window['gtag']('event', `Docs ad - ${type} - ${adId}`, {
    'event_category': `Docs ad - ${type}`,
    'event_label': adId
  });
};
