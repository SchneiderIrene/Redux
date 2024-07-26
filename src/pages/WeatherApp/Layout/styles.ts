import styled from "@emotion/styled";
import { Background } from "assets";
import { NavLink, Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
background-image: url(${Background});
`
export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgba(18, 45, 77, 0.5);
height: 80px;
border-bottom: 1px solid aliceblue;
padding-left: 50px;
padding-right: 50px;
`

export const WeatherApp = styled.h1`
font-size: 24px;
font-family: 'Inter';
color: #FFFFFF;
`

export const NavContainer = styled.nav`
display: flex;
gap: 50px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const Main = styled.main`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
padding: 120px;
gap: 50px;
`

