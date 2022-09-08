import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  NightShelter,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";

// change autoplay speed
const delay = 3000;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // change slide manually
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  // change slide automatically
  useEffect(() => {
    setTimeout(
      () =>
        setSlideIndex((prevIndex) =>
          prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [slideIndex]);

  return (
    <Container>
      {/* change direction, arrow gone if auto */}
      {!delay && (
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
      )}
      <Wrapper slideIndex={slideIndex}>
        {/* auto slide homepage pic */}
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <StyledLink to={"/products"}>
                <Button>shop now</Button>
              </StyledLink>
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* change direction, arrow gone if auto*/}
      {!delay && (
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: var(--white);
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 97%;
  background-color: var(--light-pink);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100vw;
  object-fit: cover;
`;

const Title = styled.h1`
  text-transform: uppercase;
  position: absolute;
  left: 65%;
  bottom: 50%;
`;

const Desc = styled.p`
  position: absolute;
  left: 65%;
  bottom: 45%;
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

const Button = styled.button`
  text-transform: uppercase;
  position: absolute;
  left: 65%;
  bottom: 40%;
`;

export default Slider;
