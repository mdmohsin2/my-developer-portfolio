import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="max-w-screen-xl mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
