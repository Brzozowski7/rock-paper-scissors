import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(
    circle,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
  padding: 3rem;
  color: hsl(0, 255%, 255%);
  font-family: "Barlow Semi Condensed", sans-serif;
  overflow-x: hidden;
`;
