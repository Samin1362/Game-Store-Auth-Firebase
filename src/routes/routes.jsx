import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import PopularGames from "../pages/PopularGames";
import GalleryPage from "../pages/GalleryPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import GameDetails from "../pages/GameDetails";

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
    path: "/game/:id", 
    loader: () => fetch("/data.json"),
    Component: GameDetails
  },
  {
    path: "/login", 
    Component: LoginPage
  },
  {
    path: "/register",
    Component: RegisterPage
  },
  {
    path: "*", 
    Component: ErrorPage
  }
])