import styled from "styled-components";
import { device } from "./device";

export const AppPageDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  height: calc(100vh - 80px);
  @media ${device.laptopL} {
    justify-content: space-around;
  }
  @media ${device.mobileXL} {
    height: calc(100vh - 50px);
  }
}
`;
