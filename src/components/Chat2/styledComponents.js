import styled from 'styled-components';


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
  border : 2px solid #f1f1f1;
  padding : 10px;
  border-radius : 5px;
  margin-right : 10px;
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
