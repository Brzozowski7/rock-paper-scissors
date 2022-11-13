import styled from "styled-components";
import rulesImg from "../../images/image-rules-bonus.svg";
export const RulesWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
  img {
    cursor: pointer;
  }
`;
export const RulesImgContainer = styled.div`
  margin-top: 3rem;
  border-radius: 1rem;
  padding: 2rem;
  width: 50%;
  height: 85%;
  background-color: white;
  background-image: url(${rulesImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 960px) {
    margin: 0;
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`;
