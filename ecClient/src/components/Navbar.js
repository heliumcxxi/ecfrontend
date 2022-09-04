import styled from "styled-components";
import { Badge } from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid gray;
  margin: 1rem;
`;

const SearchBar = styled.input`
  border: none;
  width: 150px;

  &:focus {
    outline: none;
  }
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

// currently no wrapper class

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Left>
        <Language style={{ color: "gray" }}>EN</Language>
        <SearchContainer>
          <SearchBar placeholder="search" />
          <SearchOutlined style={{ color: "gray", cursor: "pointer" }} />
        </SearchContainer>
      </Left>
      <StyledLink to="/">
        <Center>Jewellry Quest</Center>
      </StyledLink>
      <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign In</MenuItem>
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

export default Navbar;
