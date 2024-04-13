import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Desktop from "pages/Desktop";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktop",
      element: <Desktop />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
