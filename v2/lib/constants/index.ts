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
  newsletter: 'https://beratbozkurt.substack.com/',

  social: {
    twitter: 'https://twitter.com/beratbozkurt0',
    github: 'https://github.com/berat',
    linkedin: 'https://www.linkedin.com/in/beratbozkurt/',
    instagram: 'https://instagram.com/beratbozkurt0',
    superpeer: 'https://superpeer.com/berat',
    unsplash: 'https://unsplash.com/@beratbozkurt0'
  }
};

export const menus: MenusType[] = [
  {
    key: 'anasayfa',
    title: 'Ana sayfa',
    path: '/'
  },
  {
    key: 'hakkimda',
    title: 'Hakkımda',
    path: '/about'
  },
  {
    key: 'blog',
    title: 'Blog',
    path: '/blog'
  },
  {
    key: 'journey',
    title: 'Yolculuk',
    path: '/journey'
  },
  {
    key: 'bookmarks',
    title: 'Yer imleri',
    path: '/bookmarks'
  },
  {
    key: 'fotograflar',
    title: 'Fotoğraflar',
    path: '/photos'
  }
];

