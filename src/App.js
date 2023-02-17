import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import allRouter from './AllFolder/Routers/AllRouter/AllRouter';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-slate-200">
      <RouterProvider router={allRouter}></RouterProvider>
      
    </div>
  );
}

export default App;
