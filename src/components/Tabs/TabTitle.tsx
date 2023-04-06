import { ReactElement, useCallback } from "react";
import '../../App.scss'

export interface Props {
  title: string;
  index: number;
  isActive: boolean;
  image?: ReactElement;
  setSelectedTab: (index: number)=> void
}
const TabTitle = (
  {title, index, isActive, setSelectedTab, image}: Props):JSX.Element => {

    const handleClick = useCallback(()=> {
      setSelectedTab(index)
    }, [setSelectedTab, index])

  return ( 
    <div className={`${isActive ? 'tab__border' : 'text-text'} py-3`}>
      <button onClick={handleClick} className="flex gap-1"> 
        {title} <span>{image}</span>
      </button>
    </div>
   );
}
 
export default TabTitle;