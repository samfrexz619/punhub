import { AiOutlinePlus } from 'react-icons/ai'
interface ButtonProps {
  children: string;
  className: string;
  withIcon: boolean
}

const Button = ({children, className, withIcon}: ButtonProps) => {
  return ( 
    <button className={`${className} rounded-lg py-2 px-[27px] flex items-center w-[105px] justify-center cursor-pointer`}>
      { withIcon &&
      <span className='text-[#161823] pr-1'><AiOutlinePlus /></span>
      }
      <span>{children}</span>
    </button>
   );
}
 
export default Button;