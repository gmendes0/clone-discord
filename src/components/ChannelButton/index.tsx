import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

interface IProps {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<IProps> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />

        <span>{channelName}</span>
      </div>

      <div className="action-buttons">
        <InviteIcon />

        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
