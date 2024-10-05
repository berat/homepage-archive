'use client';

/* eslint-disable max-len */

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const handleTwitter = () => {
    const twitterURL = `https://twitter.com/intent/tweet?url=${url}&via=beratbozkurt0&text=${title}`;
    window.open(twitterURL, '_blank');
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <section className="flex gap-2 items-center mt-8">
      <button
        onClick={handleTwitter}
        type="button"
        className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
      >
        <svg
          className="w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 17"
        >
          <path
            fillRule="evenodd"
            d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
            clipRule="evenodd"
          />
        </svg>
        Share on Twitter
      </button>
      <button
        type="button"
        onClick={copyClipboard}
        className="text-white bg-[#333] hover:bg-[#333]/90 focus:ring-4 focus:outline-none focus:ring-[#333]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#333]/55 mr-2 mb-2"
      >
        <svg
          className="w-5 h-5 mr-2"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.8333 10.5H13.3333C12.0447 10.5 11 11.5447 11 12.8333V23.3333C11 24.622 12.0447 25.6667 13.3333 25.6667H23.8333C25.122 25.6667 26.1667 24.622 26.1667 23.3333V12.8333C26.1667 11.5447 25.122 10.5 23.8333 10.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.33325 17.5H5.16659C4.54775 17.5 3.95425 17.2542 3.51667 16.8166C3.07908 16.379 2.83325 15.7855 2.83325 15.1667V4.66671C2.83325 4.04787 3.07908 3.45438 3.51667 3.01679C3.95425 2.57921 4.54775 2.33337 5.16659 2.33337H15.6666C16.2854 2.33337 16.8789 2.57921 17.3165 3.01679C17.7541 3.45438 17.9999 4.04787 17.9999 4.66671V5.83337"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Copy
      </button>
    </section>
  );
}
