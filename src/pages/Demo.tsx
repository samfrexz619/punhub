import { useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import Button from "../components/ui/Button";
import '../App.scss'



const DemoPage = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setSearch(e.target.value);
  }
  return (
    <main className="w-[90%] mx-auto">
      <div className="w-4/5 mx-auto">
        <SearchBar  
          placeholder="Search creators and punchlines"
          name="search"
          value={search || ''}
          handleSearch={handleSearch}
        />
      </div>
      <div>
        <Button 
          className="bg-pry text-white"
          withIcon={false}
        >
            Log in
        </Button>
      </div>
      <div className="mt-5">
        <Button 
          className="bg-white text-pry btn"
          withIcon={true}
        >
            Create
        </Button>
      </div>
      <div className="mt-5">
      <svg width="24" height="21" viewBox="0 0 24 21">
        <use xlinkHref="/sprite.svg#home-icon" />
      </svg>
      <svg width="24" height="20" viewBox="0 0 24 20">
        <use xlinkHref="/sprite.svg#puns-icon" />
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <use xlinkHref="/sprite.svg#polls-icon" />
      </svg>
      </div>
    </main>
   );
}
 
export default DemoPage;