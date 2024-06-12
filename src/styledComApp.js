import styled from 'styled-components';
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: rgb(0, 49, 69);
  color: white;
`;

export const Logo = styled.img`
  height: 50px;
  margin: 10px;
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RemoveIcon = styled.i`
  cursor: pointer;
`;

export const PdfUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 180px;
`;

export const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  // padding: 10vw;
`;

export const Questions = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &.user {
    justify-content: flex-end;
    margin: 5px;
  }

  &.ai {
    justify-content: flex-start;

  }
`;

export const UserIcon = styled(FaUser)`
  margin-right: 10px;
  font-size : 30px;
`;

export const AiIcon = styled(RiRobot2Fill)`
  margin-right: 10px;
`;

export const QuestionForm = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

export const QuestionInput = styled.input`
  position: fixed;
  bottom: 5%;
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  width: 50vw;
  left: 20%;
`;

export const SendButton = styled.button`
  position: fixed;
  right: 25%;
  bottom: 5%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 5%px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styling for the message bubbles
export const MessageList = styled.ul`
  overflow: hidden;
  padding: 0;
`;

export const MessageItem = styled.li`
  list-style: none;
  margin: 15px 0;
  display: block;
  width: 100%;
  position: relative;

  &.user {
    text-align: right;
  }

  &.user:before {
    display: block;
    clear: both;
    content: '';
    position: absolute;
    bottom: 15px;
    right: -27px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12px 15px 12px;
    border-color: transparent transparent #4b7bec transparent;
    transform: rotate(37deg);
  }

  &.ai {
    text-align: left;
  }

  &.ai:before {
    display: block;
    clear: both;
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12px 15px 12px;
    border-color: transparent transparent #f5f5f5 transparent;
    transform: rotate(-37deg);
  }
`;

export const MessageBubble = styled.p`
  color: ${(props) => (props.user === 'ai' ? '#000' : '#fff')};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  padding: 15px;
  background: ${(props) => (props.user === 'ai' ? '#f5f5f5' : '#4b7bec')};
  display: inline-block;
  border-radius: 10px;
  margin-bottom: 0;

  & b {
    display: block;
    color: ${(props) => (props.user === 'ai' ? '#180660' : '#061061')};
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
  }
`;
