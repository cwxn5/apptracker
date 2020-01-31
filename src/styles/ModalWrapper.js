import { Modal } from "antd";
import styled from "styled-components";
import { themes } from "./theme";

export const ModalWrapper = styled(Modal)`
  .ant-modal-body {
    padding: 8px;
    line-height: 1;
    background-color: ${themes.default.color1};
    border-radius: 8px;
    color: ${themes.default.color5};
    .field {
      margin: 0 0 8px;
    }
  }
  .ant-modal-content {
    color: ${themes.default.color1};
  }
  .ant-modal-header {
    background-color: ${themes.default.color5};
    height: 58px;
    align-items: center;
  }
  .ant-modal-title {
    color: ${themes.default.color1};
  }
  button {
    color: ${themes.default.color1};
    background-color: ${themes.default.color5};
  }
`;
export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${themes.default.color1};
`;
export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
