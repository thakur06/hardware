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
function Layout() {
  return (
    <div className="scrollbar-hide overflow-hidden">
      <Navbar />
      <div className="mt-20 h-full scrollbar-hide overflow-hidden">
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
