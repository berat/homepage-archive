import Divider from '@/components/divider';
import Blog from '@/components/home/blog';
import ContactList from '@/components/list/contact';
import { blogData } from '@/lib/blog';

export const metadata = {
  title: 'Articles | Berat Bozkurt',
  description: 'Articles | Berat Bozkurt'
};

export default function BlogPage() {
  return (
    <main>
      <Blog data={blogData()} page />
      <Divider />
      <ContactList />
    </main>
  );
}
