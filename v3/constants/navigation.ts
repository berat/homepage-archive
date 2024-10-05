import { NavigationType } from '@/models/navigation';

export const NAVIGATION_ITEMS: NavigationType[] = [
  {
    key: 'anasayfa',
    title: 'anasayfa',
    path: '/'
  },
  {
    key: 'yazilar',
    title: 'yazılar',
    path: '/blog'
  },
  {
    key: 'fotograflar',
    title: 'fotoğraflar',
    path: '/photos'
  },
  {
    key: 'bookmarks',
    title: 'yer imleri',
    path: '/bookmarks'
  },
  {
    key: 'journey',
    title: "an'lar",
    path: '/journey'
  }
];
