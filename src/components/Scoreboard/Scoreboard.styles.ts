import styled from "styled-components";

export const ScoreboardWrapper = styled.header`
  user-select: none;
  width: 50%;
  border: 1px solid lightgray;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const GameTitle = styled.div`
  font-size: 1.3rem;
  line-height: 0.95rem;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
    line-height: 0.8rem;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  height: 7rem;
  width: 7rem;
  border-radius: 0.5rem;
  background-color: hsla(0, 0%, 100%, 1);
  padding: 0.5rem;
  line-height: 2.3rem;
  h2 {
    color: hsl(229, 64%, 46%);
  }
  p {
    font-weight: 700;
    font-size: 4rem;
    color: hsl(229, 25%, 31%);
  }
  @media screen and (max-width: 960px) {
    padding: 0.3rem;
    height: 100%;
    width: 5rem;
    h2 {
      color: hsl(229, 64%, 46%);
    }
    p {
      font-size: 3.5rem;
      color: hsl(229, 25%, 31%);
    }
  }
`;
