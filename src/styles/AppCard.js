import styled from "styled-components";
import { Collapse } from "antd";
import { themes } from "./theme";

export const CardTitleDate = styled.div`
  font-size: 10px;
`;
export const CardTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  color: ${themes.default.color5};
`;
export const CardTitleHeaderCompany = styled.div`
  text-align: right;
  font-weight: 600;
  font-style: ${props => (props.favorite ? "italic" : "normal")};
`;
export const CardTitleHeaderLocation = styled.div`
  text-align: right;
  font-size: 10px;
`;
export const CardTitleHeaderPosition = styled.div`
  font-weight: 600;
  font-style: ${props => (props.favorite ? "italic" : "normal")};
`;
export const CardButton = styled.div`
  width: auto;
`;
export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;
export const CollapseWrapper = styled(Collapse)`
  .ant-collapse-item {
    .ant-collapse-header {
      padding: 2px;
    }
  }
  .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header {
    padding: 2px;
  }
  background-color: color: ${themes.default.color1};;
`;
export const TwoColumnDiv = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  color: ${themes.default.color5};
  a {
    color: ${themes.default.color3};
  }
`;
