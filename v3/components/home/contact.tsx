import ContactList from '../list/contact';

const Contact = () => {
  return (
    <section className="text-slate-600 mt-10">
      <p className="text-lg leading-7 font-light">
        <b className="active">İletişimde</b> kalmak her zaman önemlidir. E-posta
        listeme <b className="active">abone</b> olarak veya sosyal medya
        hesaplarımı <b className="active">takip ederek</b> iletişimde
        kalabiliriz. Lütfen bana yazmaktan çekinmeyin. Ayrıca bana destek olmak
        için <b className="active">bağış</b> yapabilirsiniz.
      </p>
      <ContactList />
    </section>
  );
};

export default Contact;
