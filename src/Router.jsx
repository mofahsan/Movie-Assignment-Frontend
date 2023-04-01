import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import MoviesCard from "./components/moviesCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesCard/>
  },
]);


export default router
