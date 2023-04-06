import { ReactElement, useState } from "react";
import TabTitle, {Props as TabTitleProp} from "./TabTitle";


interface TabProps {
  children: ReactElement<TabTitleProp>[];
  tabIndex?: number;
}
const Tab = ({children, tabIndex}: TabProps) => {

  const [seletedTabIndex, setSeletedTabIndex] = useState(tabIndex || 0)
  return ( 
    <div className="w-full">
      <div className="flex justify-between pb-4">
      {
        children.map((child, index) => (
          <TabTitle  
            key={child.props.title}
            title={child.props.title}
            index={index}
            isActive={index === seletedTabIndex}
            setSelectedTab={setSeletedTabIndex}
            image={child.props.image}
          /> 
        ))
      }
      </div>
      <div>
        {children[seletedTabIndex]}
      </div>
    </div>
   );
}
 
export default Tab;