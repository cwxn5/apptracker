import styled from "styled-components";
import { Avatar } from "antd";
import { device } from "./device";
import { themes } from "./theme";

export const AvatarWrapper = styled(Avatar)`
  background-color: ${themes.default.color1};
  color: ${themes.default.color5};
  font-weight: 600;
`;
export const ColumnDiv = styled.div`
  height: fit-content;
  margin: 16px;
  padding: 8px;
  background-color: ${themes.default.color2};
  border: 1px solid ${themes.default.color2};
  border-radius: 8px;
  @media ${device.mobileS} {
    min-width: 90%;
    max-width: 90%;
  }
  @media ${device.tablet} {
    min-width: 47%;
    max-width: 47%;
  }
  @media ${device.laptopL} {
    min-width: 23%;
    max-width: 23%;
  }
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
  .ant-switch-checked {
    background-color: ${themes.default.color3};
  }
`;
export const AppCardsDiv = styled.div`
  border: ${props =>
    props.showCardAppsBorder ? `1px solid ${themes.default.color2}` : "none"};
  border-radius: 4px;
  overflow-y: auto;
  max-height: 72vh;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${themes.default.color2};
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-color: ${themes.default.color5};
  }
  @media ${device.mobileS} {
    max-height: 65vh;
  }
  @media ${device.tablet} {
    max-height: 75vh;
  }
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${themes.default.color5};
  padding: 0 8px;
`;
