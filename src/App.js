import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import allRouter from './AllFolder/Routers/AllRouter/AllRouter';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-[1240px] mx-auto bg-slate-100">
      <RouterProvider router={allRouter}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
