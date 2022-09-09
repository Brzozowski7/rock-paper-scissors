import styled from "styled-components";

export const RulesButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid hsla(0, 0%, 50%, 1);
  border-radius: 0.5rem;
  align-self: flex-end;
  padding: 0.5rem 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: hsla(0, 0%, 50%, 0.5);
    color: hsla(0, 0%, 100%, 1);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 960px) {
    padding: 0.5rem 4rem;
    width: 30%;
  }
`;
