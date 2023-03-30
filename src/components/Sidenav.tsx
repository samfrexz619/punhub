import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss'
import SidenavIcon from './SidenavIcon';

type LinkProps = {
  name: string;
  id: number;
  path: string;
}

const linkItems = [
  {
    name: 'home',
    id: 1,
    path: '/'
  },
  {
    name: 'puns',
    id: 2,
    path: '#'
  },
  {
    name: 'polls',
    id: 3,
    path: '#'
  },
]

const SideNav = () => {
  const [links, setLinks] = useState<LinkProps[]>(linkItems)
  return ( 
    <aside className='side-nav py-7'>
        <ul className='w-full'>
          {
            links.map(link => (
              <li key={link.id} className='py-3'>
                <NavLink to={link.path} className={`flex items-center text-text`}>
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