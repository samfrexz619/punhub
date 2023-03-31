import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { LinkProvider } from './context/LinkContext';
import HomeLayout from './layout/HomeLayout';
import DemoPage from './pages/Demo';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import PollsPage from './pages/Polls';
import PunsPage from './pages/Puns';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout  />,
    children: [
      {
        path: "/",
        element: <HomePage  />
      },
      {
        path: "/puns",
        element: <PunsPage  />
      },
      {
        path: "/polls",
        element: <PollsPage  />
      }
    ]
  },
  {
    path: "/demo",
    element: <DemoPage  />
  },
  {
    path: "*",
    element: <NotFound />
  },
])

function App() {
  return (
    <LinkProvider>
      <RouterProvider router={router}  />
    </LinkProvider>
  )
}

export default App;
