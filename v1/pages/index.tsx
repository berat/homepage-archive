import { getSortedPostsData } from 'lib/post';
import { allBlogDataTypes } from 'lib/types';
import { generateRssFeed } from 'lib/rss';
import {
  Layout,
  PostCard,
  ProjectCard,
  SeparateTitle,
  ViewMoreButton,
  ExperienceCard
} from 'components';
import projects from 'lib/constants/projects';
import experiences from 'lib/constants/experiences';
import { ExperienceCardProps } from 'components/cards/experience';

interface HomeProps {
  blog: allBlogDataTypes[];
}

const Home: React.FC<HomeProps> = ({ blog }) => {
  return (
    <Layout isHomePage>
      <section id="posts">
        <SeparateTitle title="Son Yazılar" isDisplayFont />
        <ul className="posts-list">
          {blog.map((item: allBlogDataTypes) => {
            return (
              <li key={item.id}>
                <PostCard
                  title={item.title}
                  slug={item.path}
                  content={item.content}
                  date={item.date}
                  categories={item.category}
                />
              </li>
            );
          })}
        </ul>
        <ViewMoreButton />
      </section>
      {/* <section id="experiences">
        <SeparateTitle title="Deneyimler" isDisplayFont />
        <ul>
          {experiences.map((item: ExperienceCardProps, index: number) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </ul>
      </section> */}
      <section id="projects">
        <SeparateTitle title="Projeler" isDisplayFont />
        <ul className="projects-list">
          {projects.map(item => (
            <li className="projects-list__project" key={item.name}>
              <ProjectCard
                name={item.name}
                icon={item.icon}
                description={item.description}
                keywords={item.keywords}
                url={item.url}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const blog = await getSortedPostsData(3);

  await generateRssFeed();

  return { props: { blog: JSON.parse(JSON.stringify(blog)) } };
}

export default Home;
