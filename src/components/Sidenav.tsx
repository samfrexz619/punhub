import { useContext } from 'react';
import { LinkContext } from '../context/LinkContext';
import { NavLink } from 'react-router-dom';
import SidenavIcon from './SidenavIcon';
import '../App.scss'
import Button from './ui/Button';


const SideNav = () => {

  const links = useContext(LinkContext)
  
  return ( 
    <aside className='side-nav py-7'>
        <ul className='w-[95%] mx-auto'>
          {
            links.map(link => (
              <li key={link.id} className='py-3'>
                <NavLink to={link.path} className={`flex font-bold items-center capitalize`}>
                  <SidenavIcon icon={link.name} />
                  <span className='px-3'>{link.name}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
        <div className='py-10'>
          <div className='w-[93%] text-center bord py-5'>
            <h3 className='text font-bold'>Let’s revive the Creativity of the hip-hop culture</h3>
          <div className='w-full flex justify-center py-5'>
            <Button
              className='border-solid border border-pry text-[#070808] w-[200px]'
              withIcon={false}>
                <span>Log in</span>
            </Button>
          </div>
          </div>
        </div>
    </aside>
   );
}
 
export default SideNav;