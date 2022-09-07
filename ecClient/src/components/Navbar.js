import styled from "styled-components";
import { Badge } from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Left>
        <Language style={{ color: "gray" }}>EN</Language>
        <SearchBar placeholder="search product here" />
      </Left>
      <StyledLink to="/">
        <Center>Jewelry Quest</Center>
      </StyledLink>
      <Right>
        <MenuItem>
          <StyledLink to={"/register"}>Register</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={"/login"}>Sign In</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </StyledLink>
        </MenuItem>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10rem;
`;

const Language = styled.span`
  font-size: 1.2rems;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  font-size: var(--secondary-title-font-size);
  font-weight: 700;
  text-decoration: none;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10rem;
`;

const MenuItem = styled.div`
  cursor: pointer;
  size: 1.2rem;
  margin: 1rem;
`;

export default Navbar;
