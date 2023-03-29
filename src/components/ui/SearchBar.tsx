import { BsSearch } from 'react-icons/bs'
import '../../App.scss'

type SearchBarProps = {
  placeholder: string;
  name: string;
  value: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>)=> void
}
const SearchBar = ({placeholder, name, value, handleSearch}: SearchBarProps) => {
  return ( 
    <div className="search-bar">
      <span className='text-text pr-3'>
        <BsSearch  />
      </span>
      <input 
        type="search" 
        placeholder={placeholder} 
        name={name}
        value={value}
        onChange={handleSearch}
      />
    </div>
   );
}
 
export default SearchBar;