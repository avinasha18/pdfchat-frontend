import styled ,{keyframes} from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 576,
};

const media = {
  desktop: `(max-width: ${sizes.desktop}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  phone: `(max-width: ${sizes.phone}px)`,
};


export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: rgb(0, 49, 69);
  color: white;
  @media ${media.phone}{
    padding : 5px 5px;
  }
`;

export const Logo = styled.img`
  height: 50px;
  margin: 10px;
   @media ${media.phone}{
    height : 40px;
    padding : 2px;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border : 2px solid #f1f1f1;
  padding : 10px;
  border-radius : 8px;
  margin-right : 10px;
  @media ${media.phone}{
    padding : 7px;
    font-size : 12px;
    color : #fff;
    border-radius : 13px;
    border :1px ridge grey;
    margin-right : 5px;
  }
`;

export const ErrorMessage = styled.p`
  font-size : 15px;
  font-family : calibri;
  color : red;
  font-family : calibri;
  
`
export const RemoveIcon = styled.i`
  cursor: pointer;
`;

// Defined keyframes for animations
const showIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const Body = styled.div`
  background-color: #f1f1f1;
`;

export const MainChatContent = styled.div`
  flex-grow: 1;
  padding: 20px 40px;
  max-width: 100%;
  border-right: 1px solid #ebe7fb;
`;

export const ContentHeader = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid #ebe7fb;
  display: flex;
  margin-bottom : 12px;
  justify-content: space-between;
  align-items: center;
  @media ${media.phone}{
    padding-bottom : 4px;
    margin-bottom : 7px;
  }
`;

export const CurrentChattingUser = styled.div`
  display: flex;
  align-items: center;
  @media ${media.phone}{
    font-size : 9px;
  }
`;
export const Filenname = styled.span`
  color : rgb(0, 49, 69);
  @media ${media.phone}{
    font-size : 11px;
  }
`;

export const CurrentChattingUserText = styled.p`
  margin: 0;
  font-weight: 500;
`;



export const ContentBody = styled.div`
  max-height: calc(100vh - calc(100vh / 2));
  overflow: auto;
  @media ${media.phone}{
    max-height : 60vh;
 
  }
`;

export const ChatItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  transform: scale(0);
  transform-origin: right;
  animation: ${showIn} 0.2s cubic-bezier(0.88, 0.19, 0.37, 1.11) both 0.2s;
`;

export const ChatItemContentItem = styled.div`
  background-color: #4462ff;
  color: #fff;
  padding: 15px;
  border-radius: 10px 10px 0 10px;
  max-width: 50%;
  min-width: 215px;

  ${(props) =>
    props.isOther &&
    `
    background-color: #fff;
    color: #000;
    border-radius: 10px 10px 10px 0;
    @media ${media.phone}{
      min-width : 80px;
      max-width : 50%;
      padding : 8px;
      margin-left : 5px;
    }
  `}
  @media ${media.phone}{
      min-width : 80px;
      max-width : 50%;
      padding : 8px;
      margin-right : 5px;
    }
`;

export const OtherChatItem = styled(ChatItem)`
  flex-direction: row-reverse;
  transform-origin: left;
`;

export const AvatarItem = styled.div`
  ${props => props.isUser ? `
    margin-left: 10px;
    margin-right: 0px;
  ` : `
    margin-left: 0px;
    margin-right: 10px;
  `}
`;
 
  


export const ContentFooter = styled.div`
  padding-top: 30px;
`;

export const DeleteButton = styled.button`
  border : none;
  background : none;
  @media ${media.phone}{
    margin : 0px;
  }
`
export const SendButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #ecefff;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #4665ff;
  padding: 0;
  border-radius: 5px;
  line-height: 36px;
  transition: all 0.3s cubic-bezier(0.88, 0.19, 0.37, 1.11);

  &:hover {
    transform: scale(1.2);
  }
`;

export const SendButtonIcon = styled.i`
  display: block;
`;

export const InputField = styled.input`
  flex-grow: 1;
  padding: 0 15px;
  background-color: transparent;
  border: none;
  outline: none;
  @media ${media.phone}{
    padding : 0px;
  }
`;

export const SendMsgBtn = styled.button`
  background-color: #3b5bfe;
  color: #fff;
`;


export const ChatListItem = styled.div`
  display: flex;
  border-bottom: 1px solid #ebe7fb;
  padding-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px 10px 10px 20px;
  transition: all 0.3s cubic-bezier(0.88, 0.19, 0.37, 1.11);
  transform: scale(0);
  animation: ${showIn} 0.2s cubic-bezier(0.88, 0.19, 0.37, 1.11) both 0.1s;

  &:first-child {
    margin-top: 0;
  }
`;


export const PdfUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 180px;
`;



export const SendNewMessage = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  position: fixed;
  bottom: 8%;
  left: 13%;
  width: 70%;

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens if needed */
    width: 90%;
    left: 5%;
  }
`;

export const SendMessageButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #3b5bfe;
  color: #fff;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  border-radius: 5px;
  line-height: 36px;
  transition: all 0.3s cubic-bezier(0.88, 0.19, 0.37, 1.11);

  &:hover {
    transform: scale(1.2);
  }
`;

export const SendMessageIcon = styled.i`
  display: block;
`;

export const SendMessageInput = styled.input`
  flex-grow: 1;
  padding: 0 15px;
  background-color: transparent;
  border: none;
  outline: none;
`;


export const ChatItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  transform: scale(0);
  transform-origin: right;
  animation: ${showIn} 0.2s cubic-bezier(0.88, 0.19, 0.37, 1.11) both;
  animation-delay: 0.2s;

  &.other {
    flex-direction: row-reverse;
    transform-origin: left;
  }
`;

export const ChatItemContent = styled.div`
  background-color: #4462ff;
  color: #fff;
  padding: 15px;
  border-radius: 10px 10px 0 10px;
  max-width: 50%;
  min-width: 215px;

  &.other {
    background-color: #fff;
    color: #000;
    border-radius: 10px 10px 10px 0;
  }
`;

export const Avatar = styled.div`
  margin-right: 20px;
  margin-left: 0px;
`;

export const ChatMsg = styled.div`
  font-size: 16px;
`;


