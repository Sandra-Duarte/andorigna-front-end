
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from './component/page/Home/Home';
import Contact from './component/page/Contact/Contact';
import About from './component/page/About Us/About';
import Sign  from './component/page/Sign Out/Sign';
import Layout from './component/page/Navbar/Layout';

const router = createBrowserRouter(createRoutesFromElements(

  <Route element ={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/About Us" element={<About/>}/>
    <Route path="/Sign" element={<Sign/>}/>
  </Route>
))

function App() {
  return (

   <><RouterProvider router={router} /></>
  );
}

export default App;
