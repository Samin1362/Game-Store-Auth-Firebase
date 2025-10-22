import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import PopularGames from "../pages/PopularGames";
import GalleryPage from "../pages/GalleryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, 
    children: [
      {
        index: true,
        path: "/", 
        loader: () => fetch("/data.json"),
        element: <PopularGames></PopularGames>
      }
    ]
  }, 
  {
    path: "/gallery",
    loader: () => fetch("/data.json"),
    Component: GalleryPage
  },
  {
    path: "*", 
    Component: ErrorPage
  }
])