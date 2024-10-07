import { general } from 'lib/constants/';

const MainFooter = () => {
  return (
    <footer>
      <nav id="social">
        <a href={general.social.twitter} target="_blank" rel="me noreferrer">
          twitter
        </a>
        <a href={general.social.github} target="_blank" rel="noreferrer">
          github
        </a>
        <a href={general.social.instagram} target="_blank" rel="noreferrer">
          instagram
        </a>
        <a href={general.social.linkedin} target="_blank" rel="noreferrer">
          linkedin
        </a>
        <a href={general.social.superpeer} target="_blank" rel="noreferrer">
          superpeer
        </a>
      </nav>
      <div className="email">
        <b>me</b> at <b>beratbozkurt</b> dot <b>net</b>
      </div>
    </footer>
  );
};

export default MainFooter;
