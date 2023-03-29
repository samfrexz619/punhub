import { useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import Button from "../components/ui/Button";
import '../App.scss'



const DemoPage = () => {
  const [search, setSearch] = useState<string>('')

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
    </main>
   );
}
 
export default DemoPage;