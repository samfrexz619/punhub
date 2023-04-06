import { ReactElement } from "react";

interface Props {
  title: string;
  children: ReactElement | ReactElement[]
}
const TabPane = ({children}: Props): JSX.Element => {
  return ( 
    <main>
      { children } 
    </main>
   );
}
 
export default TabPane;