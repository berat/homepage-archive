import Image from 'next/image';

const Loading = () => {
  return (
    <div id="loading">
      <Image
        src="/icons/loading.svg"
        alt=""
        height={90}
        width={90}
      />
    </div>
  );
};

export default Loading;
