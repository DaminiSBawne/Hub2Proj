import React from "react";

const sizes = {
  xs: "text-[13px] font-medium",
  lg: "text-[22px] font-normal",
  s: "text-sm font-normal",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
