import { createContext } from "react";


type Props = {
  children: React.ReactNode;
}

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
    path: '/puns'
  },
  {
    name: 'polls',
    id: 3,
    path: '/polls'
  },
]
export const LinkContext = createContext<LinkProps[]>(linkItems)

export const LinkProvider = ({children}: Props)=> {



  return (
    <LinkContext.Provider value={linkItems}>
      { children }
    </LinkContext.Provider>
  )
}