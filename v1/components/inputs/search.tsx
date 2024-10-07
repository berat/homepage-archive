import SearchIcon from 'public/icons/search.svg';

interface SearchInput {
  setSearchValue: (value: string) => void;
}

const SearchInput: React.FC<SearchInput> = ({ setSearchValue }) => {
  return (
    <div id="search">
      <input
        type="text"
        placeholder="İçerik ara"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(event.target.value)
        }
      />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
