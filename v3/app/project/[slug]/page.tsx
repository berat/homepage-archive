import ProjectDetail from '@/components/detail/project';
import Divider from '@/components/divider';
import ContactList from '@/components/list/contact';
import { findProjectBySlug } from '@/lib/projects';
import { getViews } from '@/services/post';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  // @ts-ignore
  params
}): Promise<Metadata | undefined> {
  const post = findProjectBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, summary: description, slug } = post;

  const ogImage = `https://beratbozkurt.net/og?title=${title}`;

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
  const project = findProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { data: view } = await getViews(project.slug);

  return (
    <main>
      <ProjectDetail post={project} view={view} />
      <Divider />
      <ContactList />
    </main>
  );
}
