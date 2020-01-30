import styled from "styled-components";
import { device } from "./device";

export const LogOutButton = styled.button`
  margin-left: 8px;
  background-color: #d34836;
  border: none;
  color: white;
  border-radius: 16px;
  padding: 8px 8px;
  @media ${device.mobileS} {
    font-size: 10px;
  }
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: black;
  padding: 8px;
  @media ${device.mobileS} {
    height: 80px;
  }
  @media ${device.mobileXL} {
    height: 50px;
  }
`;
export const NavbarTitle = styled.div`
  align-self: center;
  color: white;
  font-size: 30px;
  padding: 0 2rem;
  @media ${device.mobileS} {
    padding-left: 8px;
    font-size: 20px;
  }
  @media ${device.mobileXL} {
    padding: inherit;
    font-size: 30px;
  }
`;
export const NavbarRight = styled.div`
  align-self: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  padding: 8px 0;
`;
export const NavbarLeft = styled.div`
  align-self: center;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  color: white;
  padding: 8px 0;
  @media ${device.mobileS} {
    padding-left: 8px;
  }
  @media ${device.mobileXL} {
    padding: inherit;
  }
`;
export const SearchDiv = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    display: inherit;
  }
  @media ${device.mobileXL} {
    display: inherit;
  }
`;
export const NavbarName = styled.div`
  color: white;
  display: flex;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: inherit;
  }
`;
