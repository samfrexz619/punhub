import { Outlet } from "react-router-dom";
import SideNav from "../components/Sidenav";
import TopNav from "../components/Topnav";
import '../App.scss'

const HomeLayout = () => {
  return ( 
    <main>
      <nav>
        <TopNav />
      </nav>
      <section className="mt-[6rem]">
        <div className="w-[91%] mx-auto flex justify-between">
          <div className="">
            <SideNav  />
          </div>
          <div className="w-[60%] main__page min-h-screen">
            <Outlet  />
          </div>
          <div className="">
            <div></div>
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default HomeLayout;