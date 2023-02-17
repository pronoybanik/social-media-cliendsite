import { createBrowserRouter } from "react-router-dom";
import Home from "../../component/Home/Home";
import Main from "../../Layer/Main/Main";


const allRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default allRouter;