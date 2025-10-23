import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import PopularGames from "../pages/PopularGames";
import GalleryPage from "../pages/GalleryPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import GameDetails from "../pages/GameDetails";
import PrivateRoute from "../provider/PrivateRoute";

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
    element: <PrivateRoute><GalleryPage></GalleryPage></PrivateRoute>
  },
  {
    path: "/game/:id", 
    loader: () => fetch("/data.json"),
    element: <PrivateRoute><GameDetails></GameDetails></PrivateRoute>
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