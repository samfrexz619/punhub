import { Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { LinkContext } from "../context/LinkContext";
import SideNav from "../components/Sidenav";
import TopNav from "../components/Topnav";
import '../App.scss'
import RightNav from "../components/RightNav";

const HomeLayout = () => {

  const links = useContext(LinkContext)
  const { pathname } = useLocation();
  
  return ( 
    <main className="font-dmSans">
      <nav>
        <TopNav />
      </nav>
      <section className="mt-[6rem]">
        <div className="w-[91%] mx-auto flex justify-between">
          <div className="w-[22%]">
            <SideNav  />
          </div>
          <div className="w-[50%] main__page min-h-screen">
            <header className="bg-pry text-white w-full h-[70px] top-[13.1vh] sticky flex items-center">
              <div className="w-[94%] mx-auto">
                {
                  links.map(link => (
                    <h1 key={link.id} className='capitalize text-2xl'>
                      { link.path === pathname ? link.name : null }
                    </h1>
                  ))
                }
              </div>
            </header>
            <Outlet  />
          </div>
          <div className="w-[28%]">
            <RightNav  />
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default HomeLayout;