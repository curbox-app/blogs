export const SITE_TITLE = 'Curbox Journal';
export const SITE_DESCRIPTION =
  'Field notes on breaking the doomscroll loop — guides, deep dives and ideas from the team behind Curbox, the free and open-source screen-time app for Android.';

export const LINKS = {
  home: 'https://curbox.app/',
  docs: 'https://curbox.app/docs/',
  features: 'https://curbox.app/features.html',
  download: 'https://curbox.app/download.html',
  donate: 'https://curbox.app/donate.html',
  github: 'https://github.com/nethical6/curbox',
  discord: 'https://discord.com/invite/Vs9mwUtuCN',
  telegram: 'https://t.me/curboxapp',
  privacy: 'https://curbox.app/privacy.html',
};

/** Prefix a site-relative path with the configured base. */
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const readingTime = (body = '') =>
  Math.max(1, Math.round(body.trim().split(/\s+/).length / 220));

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
