import styled from "styled-components";
import { Collapse } from "antd";

export const CardTitleDate = styled.div`
  font-size: 10px;
  color: grey;
`;
export const CardTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
`;
export const CardTitleHeaderCompany = styled.div`
  text-align: right;
  font-weight: ${props => (props.favorite ? "bold" : "normal")};
`;
export const CardTitleHeaderLocation = styled.div`
  text-align: right;
  font-size: 10px;
  color: grey;
`;
export const CardTitleHeaderPosition = styled.div`
  font-weight: ${props => (props.favorite ? "bold" : "normal")};
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
`;
export const TwoColumnDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
