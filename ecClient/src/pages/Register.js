import { Link } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import img from "../images/IMG_8323.JPG";

const Register = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <RegContainer>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Email"></Input>
          <StyledLink to={"/"}>
            <Button>Register</Button>
          </StyledLink>
          <StyledLink to={"/login"} style={{ color: "white" }}>
            Have an account? Sign In
          </StyledLink>
        </Form>
      </RegContainer>
      <Newsletter />
    </Container>
  );
};

export default Register;

const Container = styled.div``;
const RegContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${img});
  background-position: 15% 55%;
  height: 600px;
  width: 100vw;
  border: 1px solid var(--grey);
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h3`
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  width: 250px;
  margin: 1rem;

  &:focus {
    outline: none;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  margin-bottom: 1rem;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 250px;
  height: 40px;
  border-style: none;
  cursor: pointer;
  margin-top: 1rem;
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
`;
