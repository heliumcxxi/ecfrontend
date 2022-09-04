import { yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
  margin: 3px;
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

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  color: whitesmoke;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rem;
`;

const Title = styled.h6`
  font-size: var(--secondary-title-font-size);
  margin: 1rem;
  text-transform: capitalize;
`;

const Button = styled.button`
  border: none;
  color: grey;
  font-weight: var(--bold-font-weight);
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      {/* redirect to products page */}
      {/* pick from data */}
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <StyledLink to={`/products/${item.cat}`}>
          <Button>SHOP NOW</Button>
        </StyledLink>
      </Info>
    </Container>
  );
};

export default CategoryItem;
