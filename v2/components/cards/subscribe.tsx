import { general } from 'lib/constants';
import FollowSocial from 'components/social/follow';

const SubscribeCard = () => {
  return (
    <section id="subscribe-card">
      <h4>Yakından takip et!</h4>
      <p>Daha yakından takip etmek için aşağıdaki platformlardan takip edebilir ya da mail listeme abone olabilirsin.</p>
      <FollowSocial />
      <span>YA DA</span>
      <a
        href={general.newsletter}
        target="_blank"
        className="subscribe-button"
        rel="noreferrer"
      >
        MAİL LİSTESİNE ABONE OL
      </a>
    </section>
  );
};

export default SubscribeCard;
