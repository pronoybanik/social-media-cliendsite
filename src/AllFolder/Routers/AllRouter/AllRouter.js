import { createBrowserRouter } from "react-router-dom";
import About from "../../component/About/About";
import AddPost from "../../component/AddPost/AddPost";
import Home from "../../component/Home/Home";
import Login from "../../component/Login/Login";
import MediaPage from "../../component/MediaPage/MediaPage";
import PostDetails from "../../component/postDetails/postDetails";
import Register from "../../component/Register/Register";
import Main from "../../Layer/Main/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const allRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addPost',
                element: <AddPost></AddPost>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/media',
                element: <MediaPage></MediaPage>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/postDetails/:id',
                element: <PrivateRouter><PostDetails></PostDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/postDetails/${params.id}`)
            }
        ]
    }
])

export default allRouter;