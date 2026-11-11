export type Lang = 'en' | 'fr';

// Page addresses in each language. The language button uses this to find
// the same page in the other language.
export const routes = {
  home: { en: '/', fr: '/fr/' },
  menu: { en: '/menu/', fr: '/fr/menu/' },
  about: { en: '/about/', fr: '/fr/a-propos/' },
  blog: { en: '/blog/', fr: '/fr/blogue/' },
  contact: { en: '/contact/', fr: '/fr/contact/' },
} as const;

export type PageKey = keyof typeof routes;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'lang.switch': 'Français',
    'lang.switchLabel': 'Voir cette page en français',
    skip: 'Skip to content',
    'hours.title': 'Hours',
    'hours.closed': 'Closed',
    'photo.soon': 'Photo coming soon',
    'blog.latest': 'Latest from the blog',
    'blog.all': 'See all posts',
    'blog.read': 'Read more',
    'blog.none': 'No posts yet. Check back soon.',
    'blog.back': 'Back to the blog',
    'draft.badge': 'Draft',
    'draft.banner': 'Preview: draft posts are visible here. They stay hidden on the live site.',
    'footer.tagline': 'Coffee, pastries and soup by the sea.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.menu': 'Menu',
    'nav.about': 'À propos',
    'nav.blog': 'Blogue',
    'nav.contact': 'Nous joindre',
    'lang.switch': 'English',
    'lang.switchLabel': 'View this page in English',
    skip: 'Aller au contenu',
    'hours.title': "Heures d'ouverture",
    'hours.closed': 'Fermé',
    'photo.soon': 'Photo à venir',
    'blog.latest': 'Nouvelles du blogue',
    'blog.all': 'Voir tous les articles',
    'blog.read': 'Lire la suite',
    'blog.none': "Pas encore d'articles. Revenez bientôt.",
    'blog.back': 'Retour au blogue',
    'draft.badge': 'Brouillon',
    'draft.banner': 'Aperçu : les brouillons sont visibles ici. Ils restent cachés sur le site en ligne.',
    'footer.tagline': 'Café, pâtisseries et soupe au bord de la mer.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatPrice(price: string, lang: Lang): string {
  const n = Number(price);
  if (Number.isNaN(n)) return price;
  const fixed = n.toFixed(2);
  return lang === 'fr' ? `${fixed.replace('.', ',')} $` : `$${fixed}`;
}
