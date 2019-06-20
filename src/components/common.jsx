import React from "react";
import { Link } from "react-router-dom";

export const RouterLink = React.forwardRef((props, ref) => {
  return <Link innerRef={ref} {...props} />;
});
