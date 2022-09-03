import styled from "styled-components";

const Container = styled.div`
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.4rem;
  color: var(--black);
`;

const Announcement = () => {
  return <Container>Free and Easy Return</Container>;
};

export default Announcement;
