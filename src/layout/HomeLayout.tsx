import { Outlet } from "react-router-dom";
import TopNav from "../components/Topnav";

const HomeLayout = () => {
  return ( 
    <aside>
      <div>
        <TopNav />
      </div>
      <div className="mt-[5rem]">
        <Outlet  />
      </div>
    </aside>
   );
}
 
export default HomeLayout;