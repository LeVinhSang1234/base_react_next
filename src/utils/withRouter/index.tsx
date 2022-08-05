import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ComponentType } from "react";
import { RouterProps } from "@/types";
import React from "react";

export function withRouter<T>(Component: ComponentType<T & RouterProps>) {
  return React.forwardRef((props: T, ref) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        ref={ref}
        location={location}
        navigate={navigate}
        params={params}
        {...props}
      />
    );
  });
}
