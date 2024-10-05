import { Layout } from 'components';
import { JourneyCard } from 'components/cards';

const Journey = () => {
  return (
    <Layout title="Yolculuk">
      <section id="bookmarks" className="bookmarks">
        <p className="subtitle">
          Hayatımdaki gelişmeleri, önemli kararları, benim için değerli anları
          paylaştığım; sizinle hayatımdaki yolculuğu paylaştığım bir sayfa.
          <br />
        </p>
        <JourneyCard />
      </section>
    </Layout>
  );
};

export default Journey;
