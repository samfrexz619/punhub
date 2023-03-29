import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeLayout from './layout/HomeLayout';
import DemoPage from './pages/Demo';
import HomePage from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout  />,
    children: [
      {
        path: "/",
        element: <HomePage  />
      },
    ]
  },
  {
    path: "/demo",
    element: <DemoPage  />
  }
])

function App() {
  return (
    <RouterProvider router={router}  />
  )
}

export default App;
