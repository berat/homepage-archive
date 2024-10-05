import { Buttons } from 'components';
import { general } from 'lib/constants';

const { social } = general;

const FollowSocial = () => {
  return (
    <section className="social-follow">
      {Object.keys(social).map(item => {
        if (['github', 'twitter', 'linkedin', 'instagram'].includes(item)) {
          const url = social[item];

          return (
            <Buttons.SocialButtons
              key={item}
              which={item}
              url={url}
              isPrimary={false}
              isFollow
            />
          );
        } else return null;
      })}
    </section>
  );
};

export default FollowSocial;
