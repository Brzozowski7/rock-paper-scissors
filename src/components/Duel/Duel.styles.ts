import styled from "styled-components";

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

export const PlayerChoiceContainer = styled.div<{ borderColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border: ${(props) =>
    props.borderColor ? `1rem solid ${props.borderColor}` : "none"};
  background-color: ${(props) =>
    props.borderColor ? "hsla(0, 0%, 100%, 1)" : "hsla(0, 0%, 0%, 0.3)"};
  img {
    object-fit: cover;
  }
  @media screen and (max-width: 960px) {
    width: 150px;
    height: 150px;
  }
`;

export const ComputerChoiceContainer = styled.div<{ borderColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border: ${(props) =>
    props.borderColor ? `1rem solid ${props.borderColor}` : "none"};
  background-color: ${(props) =>
    props.borderColor ? "hsla(0, 0%, 100%, 1)" : "hsla(0, 0%, 0%, 0.3)"};
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
