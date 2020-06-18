import React from "react";

import Logo from "../../assets/Logo.svg";

import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  hasNotifications?: boolean;
  isHome?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
