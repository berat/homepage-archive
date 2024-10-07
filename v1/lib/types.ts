export interface GeneralConstantType {
  title: string;
  description: string;
  keywords: string;
  author: AuthorType;
  image: string;
  domain: string;
  social: SocialType;
}

export interface SocialType {
  twitter?: string;
  instagram?: string;
  unsplash?: string;
  linkedin?: string;
  github?: string;
  superpeer?: string;
}

export interface AuthorType {
  name: string;
  photo: string;
}

export interface MenusType {
  key: string | number;
  title: string;
  path: string;
}

export interface allBlogDataType {
  current: allBlogDataTypes;
  previous: allBlogDataTypes | null;
  next: allBlogDataTypes | null;
}

export interface allBlogDataTypes {
  id: string;
  path: string;
  title: string;
  date: string;
  cover: string;
  category: string[];
  readingTime: number;
  content: any;
  paragraph: any;
  slug: string;
}

export interface WebmentionType {
  source: string;
  verified: boolean;
  verified_date: string;
  private: boolean;
  data: {
    author: {
      name: string;
      url: string;
      photo: string;
    };
    url: string;
    name: string;
    content: string;
    published: string;
  };
  activity: {
    type: 'link' | 'reply' | 'repost' | 'like' | 'mention';
    sentence: string;
    sentence_html: string;
  };
  target: string;
}

export interface RaindropItemsType {
  _id: number;
  collectionId: number;
  cover: string;
  created: string;
  excerpt: string;
  link: string;
  domain: string;
  tags: string[];
  title: string;
}
