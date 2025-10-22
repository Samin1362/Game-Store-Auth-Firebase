import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import PopularGames from "../pages/PopularGames";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, 
    children: [
      {
        index: true,
        path: "/", 
        loader: () => fetch("/public/data.json"),
        element: <PopularGames></PopularGames>
      }
    ]
  }, 
  {
    path: "*", 
    Component: ErrorPage
  }
])