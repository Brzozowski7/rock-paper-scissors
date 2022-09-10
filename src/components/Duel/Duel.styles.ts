import styled from "styled-components";

interface PropsPlayer {
  borderColorPlayer: string;
}
interface PropsComputer {
  borderColorComputer: string | undefined;
}

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1000px;
  @media screen and (max-width: 960px) {
    gap: 2rem;
    width: 400px;
    height: 200px;
  }
`;

export const PlayerChoiceContainer = styled.div<PropsPlayer>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: ${(props) =>
    props.borderColorPlayer ? `1rem solid ${props.borderColorPlayer}` : "none"};
  background-color: ${(props) =>
    props.borderColorPlayer ? "hsla(0, 0%, 100%, 1)" : "hsla(0, 0%, 0%, 0.3)"};
  img {
    object-fit: cover;
  }
  @media screen and (max-width: 960px) {
    width: 150px;
    height: 150px;
  }
`;

export const ComputerChoiceContainer = styled.div<PropsComputer>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: ${(props) =>
    props.borderColorComputer
      ? `1rem solid ${props.borderColorComputer}`
      : "none"};
  background-color: ${(props) =>
    props.borderColorComputer
      ? "hsla(0, 0%, 100%, 1)"
      : "hsla(0, 0%, 0%, 0.3)"};
  img {
    object-fit: cover;
  }
  @media screen and (max-width: 960px) {
    width: 150px;
    height: 150px;
  }
`;
export const Choices = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  position: relative;
  width: 1000px;
  height: 300px;
  @media screen and (max-width: 960px) {
    gap: 2rem;
    width: 400px;
    height: 200px;
  }
`;
export const BackBtn = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  border: 1px solid hsla(0, 0%, 50%, 1);
  border-radius: 0.5rem;
  align-self: centre;
  padding: 0.5rem 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    background-color: hsla(0, 0%, 50%, 0.5);
    color: hsla(0, 0%, 100%, 1);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 960px) {
    align-self: auto;
    padding: 0.5rem 4rem;
    width: 30%;
  }
`;
