export interface BlogDataTypes {
  id: string;
  path?: string;
  title: string;
  date: string;
  cover?: string;
  category?: string[];
  readingTime: number;
  content?: any;
  paragraph?: any;
  slug: string;
}
