import { ReactEventHandler, useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import '../App.scss'
import Tab from "../components/Tabs/Tab";
import TabPane from "../components/Tabs/TabPane";
import hot from "../assets/hot.svg"
import TextInput from "../components/ui/TextInput";


const DemoPage = () => {
  const [search, setSearch] = useState<string>('');

  const [input, setInput] = useState({
    password: '',
    email: '',
    text: ''
  })

  const handleInput =(e: React.ChangeEvent<HTMLInputElement>)=> {
    const name = (e.target as HTMLInputElement).name
    const value = (e.target as HTMLInputElement).value
    setInput(prevInput => ({...prevInput, [name]: value}))
  }
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
        <img src="" alt="" />
      </div>
      <div>
        <Tab>
          <TabPane title="first one" image={<img src={hot} alt=""/>}>
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
      <div>
        <TextInput 
          type="password"
          placeholder="enter password"
          name="password"
          value={input.password}
          handleInput={handleInput}
        />
        <TextInput 
          type="email"
          placeholder="enter email"
          name="email"
          value={input.email}
          handleInput={handleInput}
        />
        <TextInput 
          type="text"
          placeholder="enter text"
          name="text"
          value={input.text}
          handleInput={handleInput}
        />
      </div>
    </main>
   );
}
 
export default DemoPage;