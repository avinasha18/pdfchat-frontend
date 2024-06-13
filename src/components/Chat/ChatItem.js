import React from "react";
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { ChatItemContentItem,ChatItemContainer,AvatarItem,ChatMsg } from "./styledComponents";

const ChatItem = ({ user, msg }) => {
  return (
    <ChatItemContainer >
      <ChatItemContentItem iUser={user === 'user'}>
        <ChatMsg isUser={user === 'user'}>{msg}</ChatMsg>
      </ChatItemContentItem>
      <AvatarItem isUser={user === 'user'}>
        {user === "user" ? <FaUser /> : <RiRobot2Fill />}
      </AvatarItem>
    </ChatItemContainer>
  );
};

export default ChatItem;
