import React from "react";
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { ChatItemContentItem,ChatItemContainer,AvatarItem,ChatMsg } from "./styledComponents";

const ChatItem = ({ user, msg }) => {
  return (
    <ChatItemContainer className={`chat__item ${user === "ai" ? "other" : ""}`}>
      <ChatItemContentItem >
        <ChatMsg>{msg}</ChatMsg>
      </ChatItemContentItem>
      <AvatarItem isUser={user === 'user'}>
        {user === "user" ? <FaUser /> : <RiRobot2Fill />}
      </AvatarItem>
    </ChatItemContainer>
  );
};

export default ChatItem;
