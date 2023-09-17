import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PostDetail from "./components/PostDetail";
import NewPost from "./components/NewPost";


export const router = createBrowserRouter([
{path:'/', element: <App/>},
{path:'/home', element: <App/>},
{path:'/postDetail/:id', element: <PostDetail/>},
{path:'/newPost', element: <NewPost/>}
])