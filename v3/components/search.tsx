'use client';

import Image from 'next/image';
import SearchIcon from 'public/icons/search.svg';

interface SearchProps {
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full mt-4 relative -bottom-4 p-3 outline-none text-base rounded-md bg-blue-50"
        onChange={e => onChange(e.target.value)}
      />
      <Image
        src={SearchIcon}
        alt="search"
        className="absolute right-3 top-[42px] fill-blue-600"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Search;
