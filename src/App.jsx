import { Contact } from "./components/Contact";
import { Exp } from "./components/Exp";
import { Footer } from "./components/Footer";
import { Graph } from "./components/Graph";
import Navbar from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { Personal } from "./pages/Personal";
import { Dsa } from "./components/Dsa";
import { Dev } from "./components/Dev";
function Layout() {
  return (
    <div className="scrollbar-hide overflow-y-scroll h-screen">
      <Navbar />
      <div className="mt-20 h-full scrollbar-hide overflow-y-scroll">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/projects", element: <Projects/> },
        { path: "/blog", element: <Blog/> },
        { path: "/me", element: <Personal/>,
          children:[
            { path: "/me", element: <Dsa/> },
            { path: "/me/dev", element: <Dev/> },
          ]
         },
       
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
