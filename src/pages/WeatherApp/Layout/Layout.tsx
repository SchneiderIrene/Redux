import { useNavigate } from "react-router-dom"
import {
  Header,
  LayoutWrapper,
  Main,
  NavContainer,
  StyledNavLink,
  WeatherApp,
} from "./styles"
import { LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  // const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <WeatherApp>
          <StyledNavLink to="/">Weather App</StyledNavLink>
        </WeatherApp>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to="/weather"
          >
            Weather
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
