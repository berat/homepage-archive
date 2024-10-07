import { Layout } from 'components';

const About = () => {
  return (
    <Layout title="Hakkımda" isHomePage>
      <section id="page-content">
        <p>
          Yaklaşık 12 yaşlarında yazılıma başlamama rağmen son 1-2 senedir
          profesyonel olarak çalışıyorum. Bu kadar erken başladığım için az çok
          neler var neler yok bilimiyorum ve yolumu belirlemek daha kolay
          oluyor. Tabii bazı şeyleri kestiremeseniz de yolda öğrendikleriniz var
          ki onlar en değerlileri oluyor. Neyse burası <b>Hakkımda</b> sayfası,
          kendimize gelelim{' '}
          <span role="img" aria-label="smile">
            😄
          </span>
        </p>
        <h2>Kısa bir özet</h2>
        <p>
          Lise zamanlarda küçük bir ajansta, freelancer olarak bir kaç projede
          çalıştım. Çok fazla blog ve forum siteleri oluşturdum. Kendi wordpress
          temalarımı yazdım ve paylaştım. Çok fazla arayüz ve mobil tasarımı
          yapmak zorunda kaldım. Çok fazla blog yazısı yazdım. İlk paramı domain
          ticareti yaparak ve blogumda reklam yayınlayarak kazandım (Lise
          zamanları).
        </p>
        <p>
          <i>Davetiyem.co</i> adında bir girişim kurdum ve yaklaşık 1.5 yıl
          hayattaydı. Sonrasında beyaz bayrağı çekip kapattığıma dair bir yazı
          yayımladım. Benim için gerçekten güzel bir tecrübeydi.
        </p>
        <h2>Kullandığım teknolojiler</h2>
        <ul>
          <li>React, React Native, Next.js, Gatsby</li>
          <li>Redux, Thunk, Saga</li>
          <li>Jest, Cypress</li>
          <li>Sass, Styled Component</li>
          <li>ESLint</li>
          <li>Git</li>
          <li>Gulp</li>
        </ul>
        <h2>Hobilerim</h2>
        <p>
          Son zamanlarda bağlama çalmaya başladım ve bir kaç türkü üzerine
          kendimi geliştirmeye çalışıyorum. Müzik kulağı fazla olmadığı için
          türküleri tam anlamıyla çalamıyorum ama çalabildiğim neyse ondan zevk
          alıyorum.
        </p>
        <p>
          Ne kadar kara kalem çizimlerini sevsem de bir türlü başaramıyorum. Ama
          kendi başıma bir şeyler karalamayı seviyorum ve kafa dağıtıyorum.
        </p>
        <p>
          İngilizce öğrenme süresi boyunca bir çok ülkeden çok fazla insanlarla
          görüntülü çağrı yaptım. Bundan dolayı farklı ülkelerden insanlara
          konuşmayı seviyorum. Bu şekilde güzel bir kültür ve düşünce alışverişi
          oluyor. Böylelikle de ingilizce pratik yapmış oluyorum.
        </p>
        <p>
          Gözüme güzel gelen ve ilgimi çeken her şeyin fotoğrafını çekerim.
          Çektiğim fotoğrafların düzenleyip daha güzel bir görünüme getirmeyi
          seviyorum.
        </p>
        <p>
          Eee fotoğraf çekmeyi sevdiğimden bahsettiğimden dolayı da gezmeyi
          sevdiğimi de anlamışsınızdır. Yeni yerler görmeyi ve orada kaybolmayı
          seviyorum. Ayrıca kaybolunan sokaklarda çekilen fotoğrafların da tadı
          bambaşka oluyor.
        </p>
        <h2>Gelecek</h2>
        <p>
          Önümüzdeki 5 ya da 10 sene içerisinde beni global bir şirket ya da
          kendi şirketimde dünyanın herhangi bir yerinde hobimi (işimi) yaparken
          göreceksiniz.
        </p>
        <h2>Blogun amacı</h2>
        <p>
          Yazıyorum çünkü öğrendiklerimi, düşündüklerimi ve sevdiklerimi
          paylaşmayı seviyorum. Burada benden bir tutam kodlar, projeler,
          düşünceler ve fotoğraflar bulacaksınız.
        </p>
      </section>
    </Layout>
  );
};

export default About;
