import React from "react";

const sizes = {
  s: "text-[54px] font-bold md:text-[46px] sm:text-[40px]",
  md: "text-[165px] font-bold md:text-5xl",
  xs: "text-lg font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
