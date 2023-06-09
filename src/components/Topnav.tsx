import { useState } from "react";
import logo from '../assets/logo.svg'
import SearchBar from "./ui/SearchBar";
import '../App.scss'
import Button from "./ui/Button";
import { BiDotsVerticalRounded } from 'react-icons/bi'


const TopNav = () => {

  const [search, setSearch] = useState('')
  // const [hide, setHide] = useState(false)

  const handleSearch =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setSearch(e.target.value);
  }

  return ( 
    <header className="nav z-50">
      <nav className='w-[91%] mx-auto h-full'>
        <div className="w-full flex min-h-[13vh] items-center justify-between">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="w-[450px]">
            <SearchBar
              placeholder="Search creators and punchlines"
              name="search"
              value={search || ''}
              handleSearch={handleSearch}
            />
          </div>
          <div className="flex">
            <Button 
              className="bg-white text-pry btn mr-4"
              withIcon={true}
            >
              <span>Create</span>
            </Button>
             <Button 
              className="bg-pry text-white mr-3"
              withIcon={false}
            >
              <span>Log in</span>
            </Button>
            <button className="text-2xl">
              <BiDotsVerticalRounded />
            </button>
          </div>
        </div>
      </nav>
    </header>
   );
}
 
export default TopNav;