import phone from '../assets/phone.svg'
import app from '../assets/apple.svg'
import google from '../assets/google.svg'

const RightNav = () => {
  return ( 
    <aside className='sticky top-[13vh] w-full'>
      <div className='w-[94%] mx-auto py-10'>
        <div className='w-full'>
          <h3 className='text-[#070808] text-[18px] text-center font-bold py-5'>Get the app.</h3>
          <img src={phone} alt="" className='block float-right'/>
        </div>
        <div className='w-full mx-auto flex justify-end gap-3'>
          <button className='py-6'>
            <img src={app} alt="" />
          </button>
          <button className='py-6'>
            <img src={google} alt="" className=''/>
          </button>
        </div>
      </div>
    </aside>
   );
}
 
export default RightNav;