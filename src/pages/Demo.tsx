import { useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import '../App.scss'
import Tab from "../components/Tabs/Tab";
import TabPane from "../components/Tabs/TabPane";



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
      
      <div className="mt-5">
      <svg width="24" height="21" viewBox="0 0 24 21">
        <use xlinkHref="/sprite.svg#home-icon" />
      </svg>
      </div>
      <div>
        
      </div>
      <div>
        <Tab>
          <TabPane title="first one">
            <div>the testing one</div>
          </TabPane>
          <TabPane title="second one">
            <div>the testing second</div>
          </TabPane>
          <TabPane title="third one">
            <div>the testing third</div>
          </TabPane>
        </Tab>
      </div>
    </main>
   );
}
 
export default DemoPage;