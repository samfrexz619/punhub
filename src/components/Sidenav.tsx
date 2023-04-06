import { useContext } from 'react';
import { LinkContext } from '../context/LinkContext';
import { NavLink } from 'react-router-dom';
import SidenavIcon from './SidenavIcon';
import Button from './ui/Button';
import { suggestedArtistes, suggestedCreators } from '../data';
import '../App.scss'


const SideNav = () => {

  const links = useContext(LinkContext)

  const artistes = suggestedArtistes

  const creators = suggestedCreators;
  
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
        <div className='px-3'>
          <h2 className='mb-4'>Suggested Artistes</h2>
          {
            artistes.map(art => (
              <div key={art.id} className='py-2'>
                <h4 className='capitalize text-[#161823] font-semibold'>
                  {art.artiste}
                </h4>
                <small>{art.puns_num} puns</small>
              </div>
            ))
          }
        </div>
        <div className='bord py-4 mt-5 w-[93%] px-3'>
          <h2 className='py-5'>Suggested Creators</h2>
          {
            creators.map(content => (
              <div key={content.id} className='py-3'>
                <div className='flex items-center gap-4'>
                  <div className='creators font-algre'>
                    <h2>CW</h2>
                  </div>
                  <div>
                    <h3 className='capitalize text-[#161823] font-semibold leading-3'>
                      {content.creator}
                    </h3>
                    <small>{content.content_num} Contents</small>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </aside>
   );
}
 
export default SideNav;