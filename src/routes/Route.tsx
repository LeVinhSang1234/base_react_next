import { Routes, Route as RouteLibrary } from "react-router-dom";
import { RouteMap } from "@/types";
import React from "react";
import routes from "@/routes";

const Route = () => {
  console.log("routes ==>", routes);
  return (
    <Routes>
      {routes.map((e: RouteMap) => {
        const ComponentRoute = e.Component;
        return (
          <RouteLibrary
            key={e.route}
            path={e.route}
            element={<ComponentRoute />}
          />
        );
      })}
    </Routes>
  );
};

export default React.memo(Route, () => true);
