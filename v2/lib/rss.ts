import fs from 'fs';
import { Feed } from 'feed';
import { allBlogData } from './post';
import { general } from './constants';

const generateRssFeed = async () => {
  const posts = allBlogData;
  const siteURL = general.domain;
  const date = new Date();
  const author = {
    name: 'Berat Bozkurt',
    email: 'beratbozkurt1999@gmail.com',
    link: 'https://twitter.com/beratbozkurt0'
  };
  const feed = new Feed({
    title: 'Berat Bozkurt | front-end developer',
    description: 'Berat Bozkurt, front-end developer, photography, blogging',
    id: siteURL,
    link: siteURL,
    copyright: `All rights reserved ${date.getFullYear()}, Berat Bozkurt`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`
    },
    author
  });
  posts.forEach(post => {
    const url = `${siteURL}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.paragraph,
      content: post.paragraph,
      author: [author],
      contributor: [author],
      date: new Date(post.date)
    });
  });
  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
};

export { generateRssFeed };
