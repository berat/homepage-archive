import { GeneralConstantType, MenusType } from 'lib/types';

export const general: GeneralConstantType = {
  title: 'Berat Bozkurt | Frontend Developer',
  description: 'Berat Bozkurt, frontend developer, photography, blogging',
  keywords:
    'berat bozkurt, frontend developer, react developer, personal blog, javascript developer',
  author: {
    name: 'Berat Bozkurt',
    photo: '/general/profile-pic.jpg'
  },
  image:
    'https://pbs.twimg.com/profile_images/1480130231319117824/h4V8SsXc_400x400.jpg',
  domain: 'https://beratbozkurt.net',

  social: {
    twitter: 'https://twitter.com/beratbozkurt0',
    github: 'https://github.com/berat',
    instagram: 'https://instagram.com/beratbozkurt0',
    linkedin: 'https://www.linkedin.com/in/beratbozkurt/',
    superpeer: 'https://superpeer.com/berat',
    unsplash: 'https://unsplash.com/@beratbozkurt0'
  }
};

export const menus: MenusType[] = [
  {
    key: 'hakkimda',
    title: 'hakkımda',
    path: '/about'
  },
  {
    key: 'blog',
    title: 'blog',
    path: '/blog'
  },
  {
    key: 'bookmarks',
    title: 'yer imleri',
    path: '/bookmarks'
  },
  {
    key: 'fotograflar',
    title: 'fotoğraflar',
    path: '/photos'
  }
];

