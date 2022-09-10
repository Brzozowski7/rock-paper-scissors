import styled from "styled-components";

interface Option {
  borderColor: string;
}

export const Wrapper = styled.main`
  position: relative;
  border-radius: 50%;
  width: 400px;
  height: 300px;
  @media screen and (max-width: 960px) {
    width: 200px;
    height: 200px;
  }
`;

export const OptionContainer = styled.div<Option>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: ${(props) => `10px solid ${props.borderColor}`};
  background-color: hsla(0, 0%, 100%, 1);
  img {
    width: 50%;
  }
  &:hover {
    scale: 1.05;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
  :nth-child(1) {
    transform: rotate(-90deg) translateX(150px);
  }
  :nth-child(2) {
    transform: rotate(-18deg) translateX(150px);
  }
  :nth-child(3) {
    transform: rotate(54deg) translateX(150px);
  }
  :nth-child(4) {
    transform: rotate(126deg) translateX(150px);
  }
  :nth-child(5) {
    transform: rotate(198deg) translateX(150px);
  }
  @media screen and (max-width: 960px) {
    left: calc(50% - 50px);
    top: calc(50% - 50px);
    height: 100px;
    width: 100px;

    :nth-child(1) {
      transform: rotate(-90deg) translateX(100px);
    }
    :nth-child(2) {
      transform: rotate(-18deg) translateX(100px);
    }
    :nth-child(3) {
      transform: rotate(54deg) translateX(100px);
    }
    :nth-child(4) {
      transform: rotate(126deg) translateX(100px);
    }
    :nth-child(5) {
      transform: rotate(198deg) translateX(100px);
    }
  }
`;
