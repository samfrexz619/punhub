import { useCallback } from "react";


export interface Props {
  title: string;
  index: number;
  isActive: boolean;
  setSelectedTab: (index: number)=> void
}
const TabTitle = (
  {title, index, isActive, setSelectedTab}: Props):JSX.Element => {

    const handleClick = useCallback(()=> {
      setSelectedTab(index)
    }, [setSelectedTab, index])

  return ( 
    <div>
      <button onClick={handleClick}> 
        {title}
      </button>
    </div>
   );
}
 
export default TabTitle;