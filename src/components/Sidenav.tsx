import { useContext } from 'react';
import { LinkContext } from '../context/LinkContext';
import { NavLink } from 'react-router-dom';
import '../App.scss'
import SidenavIcon from './SidenavIcon';


const SideNav = () => {

  const links = useContext(LinkContext)
  
  return ( 
    <aside className='side-nav py-7'>
        <ul className='w-full'>
          {
            links.map(link => (
              <li key={link.id} className='py-3'>
                <NavLink to={link.path} className={`flex items-center capitalize`}>
                  <SidenavIcon icon={link.name} />
                  <span className='px-3'>{link.name}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
    </aside>
   );
}
 
export default SideNav;