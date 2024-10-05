import { projectData } from '@/lib/projects';
import ProjectList from '../list/project';
import { SOCIAL_LINKS } from '@/constants/social';
import ExternalLink from '../link';

const Project = () => {
  return (
    <section className="text-slate-600 mt-10">
      <p className="text-lg leading-7 font-light">
        Boş zamanlarımda <b className="active">proje</b> geliştirmekten keyif
        alıyorum. Bu projeler ile deneyim kazanıp network edinmenin yanında
        pasif gelir elde etmeyi planlıyorum. Ayrıca geliştirme süreçlerini{' '}
        <span className="active-blue">#buildinpublic</span> etiketi ile{' '}
        <ExternalLink text="Twitter" href={SOCIAL_LINKS.twitter} /> hesabımda
        paylaşıyorum.
      </p>
      <ProjectList data={projectData()} />
    </section>
  );
};

export default Project;
