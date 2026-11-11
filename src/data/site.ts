// Café facts used across the site. Change a value here and it updates everywhere.
// Lines marked PLACEHOLDER still need the real information.

export const site = {
  name: 'Café Marée Haute',
  town: 'Shediac, New Brunswick',

  // PLACEHOLDER: replace with the real address, phone and email.
  address: {
    street: '[Street address / Adresse]',
    city: 'Shediac, NB',
    postalCode: 'E4P [postal code / code postal]',
  },
  phone: '(506) 555-0100',
  email: 'hello@example.com',

  // Photos: put the file in public/images, then write its path here,
  // for example '/images/storefront.jpg'. Leave empty ('') to show a photo spot.
  photos: {
    home: '',
    about: '',
    menu: '',
    contact: '',
  },
};

// Opening hours. `open` is false on days we are closed.
export const hours = [
  { en: 'Monday', fr: 'lundi', open: false },
  { en: 'Tuesday', fr: 'mardi', open: true },
  { en: 'Wednesday', fr: 'mercredi', open: true },
  { en: 'Thursday', fr: 'jeudi', open: true },
  { en: 'Friday', fr: 'vendredi', open: true },
  { en: 'Saturday', fr: 'samedi', open: true },
  { en: 'Sunday', fr: 'dimanche', open: true },
];

export const openTimes = {
  en: '7 a.m. to 4 p.m.',
  fr: '7 h à 16 h',
};

export const hoursSummary = {
  en: 'Tuesday to Sunday, 7 a.m. to 4 p.m. Closed Mondays.',
  fr: 'Du mardi au dimanche, de 7 h à 16 h. Fermé le lundi.',
};
