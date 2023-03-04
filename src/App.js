import React from 'react';
import './App.css';
import { 
  createHashRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';

// Pages
import Home from './pages/home/Home';
import Packages from './pages/packages/Packages';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path='packages' element={<Packages />} />
      <Route path='about' element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
