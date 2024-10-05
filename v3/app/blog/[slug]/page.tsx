import PostDetail from '@/components/detail/post';
import Divider from '@/components/divider';
import ContactList from '@/components/list/contact';
import { findBlogBySlug } from '@/lib/blog';
import { getViews } from '@/services/post';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  // @ts-ignore
  params
}): Promise<Metadata | undefined> {
  const post = findBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, summary: description, slug, coverImage, ...props } = post;

  const ogImage = coverImage ?? `https://beratbozkurt.net/og?title=${title}`;

  return {
    title: title + ' | Berat Bozkurt',
    description,
    openGraph: {
      title: title + ' | Berat Bozkurt',
      description,
      type: 'article',
      url: `https://beratbozkurt.net/blog/${slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: title + ' | Berat Bozkurt',
      description,
      images: [ogImage]
    }
  };
}

export default async function BlogPost({
  params
}: {
  params: { slug: string };
}) {
  const post = findBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { data: view } = await getViews(post.slug);
  console.log('=>(page.tsx:58) data', view);

  return (
    <main>
      <PostDetail post={post} view={view} />
      <Divider />
      <ContactList />
    </main>
  );
}
