import styled from "styled-components";
import { Avatar } from "antd";

export const AvatarWrapper = styled(Avatar)`
  background-color: black;
  color: white;
`;
export const ColumnDiv = styled.div`
  min-width: 350px;
  width: 350px;
  height: fit-content;
  margin: 16px;
  padding: 8px;
  background-color: #f3f4f5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;
export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => (props.cards ? "8px" : "0")};
`;
export const ColumnHeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;
export const RightAlignItem = styled.div`
  float: right;
  text-align: right;
`;
export const AppCardsDiv = styled.div`
  border: ${props => (props.showCardAppsBorder ? "1px solid #d9d9d9" : "none")};
  border-radius: 4px;
  overflow-y: auto;
  max-height: 75vh;
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
  padding: 0 8px;
`;
