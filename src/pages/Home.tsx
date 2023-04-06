import "../App.scss"
import hot from '../assets/hot.svg'
import Gist from "../components/Gist";


const HomePage = () => {  

  return ( 
    <main className="w-[92%] mx-auto">
      <div className=" py-2">
        <div className="flex gap-2 tab__border py-3">
          <h2>What's hot </h2>
          <span>
            <img src={hot} alt="fire emoji" />
          </span>
        </div>
        <div>
          <Gist />
        </div>
      </div>
     
    </main>
   );
}
export default HomePage;