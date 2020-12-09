import React from "react";

interface IIconProps {
  url: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  return <img src={props.url} alt="multiplication" />;
};

export default Icon;
