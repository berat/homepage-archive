const Info = () => {
  return (
    <section className="text-slate-600 mt-12">
      <h1 className="text-3xl font-light mb-1">Hey, Ben Berat 🤙🏼</h1>
      <h2 className="text-lg font-light mb-4 text-gray-500">
        frontend developer • blogging • shutterbug
      </h2>
      <section>
        <video
          className="rounded-md mb-4"
          width="100%"
          height="240"
          autoPlay
          loop
          playsInline
          preload={'none'}
          muted
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      {/*<section*/}
      {/*  className={*/}
      {/*    'flex relative left-1/3' +*/}
      {/*    '/2 -translate-x-1/2 rounded-md' +*/}
      {/*    ' object-cover'*/}
      {/*  }*/}
      {/*>*/}
      {/*<div className="grid grid-cols-3 grid-rows-[min-content_1fr]">*/}
      {/*  <div>*/}
      {/*    {' '}*/}
      {/*    <Image*/}
      {/*      src={'/berat.JPG'}*/}
      {/*      alt={'Berat Bozkurt'}*/}
      {/*      width={300}*/}
      {/*      height={150}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="col-span-2 row-span-2">*/}
      {/*    {' '}*/}
      {/*    <Image*/}
      {/*      src={'/berat.JPG'}*/}
      {/*      alt={'Berat Bozkurt'}*/}
      {/*      width={300}*/}
      {/*      height={150}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    {' '}*/}
      {/*    <Image*/}
      {/*      src={'/berat.JPG'}*/}
      {/*      alt={'Berat Bozkurt'}*/}
      {/*      width={300}*/}
      {/*      height={150}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*  <Image*/}
      {/*    src={'/berat.JPG'}*/}
      {/*    alt={'Berat Bozkurt'}*/}
      {/*    width={300}*/}
      {/*    height={150}*/}
      {/*  />*/}
      {/*</section>*/}
      <p className="text-lg leading-7 font-light">
        Profesyonel olarak 5 yıldan fazla deneyime sahibim. Yazılıma olan tutkum
        12 yaşlarıma dayanmaktadır. Şu an <i className="active">OSF Digital</i>{' '}
        'de <b className="active">frontend developer</b> olarak çalışıyorum.
        Ayrıca <b className="active">fotoğrafçılık</b> ve{' '}
        <b className="active">blog yazmak</b>la ilgileniyorum..
      </p>
    </section>
  );
};

export default Info;
