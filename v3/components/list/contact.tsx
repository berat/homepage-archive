import { SOCIAL_LINKS } from '@/constants/social';
import ExternalLink from '../link';

const ContactList = () => {
  return (
    <section>
      <div className="flex gap-4 my-4">
        <ExternalLink text="Twitter" href={SOCIAL_LINKS.twitter} />
        <ExternalLink text="Github" href={SOCIAL_LINKS.github} />
        <ExternalLink text="LinkedIn" href={SOCIAL_LINKS.linkedin} />
        <ExternalLink text="Instagram" href={SOCIAL_LINKS.instagram} />
      </div>
      <div className="flex gap-4">
        <ExternalLink
          text="Email listeme abone ol"
          href={SOCIAL_LINKS.subscribe}
        />
        <ExternalLink
          text="Bağış yap"
          href={SOCIAL_LINKS.donate}
          color="green"
        />
      </div>
    </section>
  );
};

export default ContactList;
