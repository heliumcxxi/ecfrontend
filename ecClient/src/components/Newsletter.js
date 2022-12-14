import {
  ArrowForwardIosOutlined,
  FacebookRounded,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Get The Latest From Jewelry Quest!</Title>
        <Desc>
          Check out Instagram for more! Contact us via WhatsApp to order
          instantly!
        </Desc>
      </InfoContainer>
      {/* await offical launch */}
      {/* <EmailContainer>
        <Input placeholder="Enter Email Address" />
        <SendButton>
          <ArrowForwardIosOutlined />
        </SendButton>
      </EmailContainer> */}
      <IconContainer>
        <Icon>
          <Instagram
            onClick={() =>
              window.open("https://www.instagram.com/jewelry.quest/?hl=en")
            }
          />
        </Icon>
        <Icon>
          <WhatsApp
            onClick={() =>
              window.open(
                "https://web.whatsapp.com/send?phone=85291471893&text=Hello"
              )
            }
          />
        </Icon>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const InfoContainer = styled.div``;

const Title = styled.h3``;

const Desc = styled.div`
  margin-top: 1rem;
`;

const EmailContainer = styled.div`
  height: 200px;
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 30px;
  width: 50%;

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  height: 36px;
`;

const IconContainer = styled.div`
  width: 50%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
`;
const Icon = styled.div`
  padding: 5px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    color: var(--white);
    transform: scale(1.2);
  }
`;

export default Newsletter;
