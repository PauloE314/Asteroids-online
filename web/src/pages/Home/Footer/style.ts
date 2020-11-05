import styled from "styled-components";
import { BaseContainer, BaseContent } from "../../../styles/common";
import { colors, dimensions } from "../../../styles/global";

export const Container = styled(BaseContainer)`
  min-height: 0px;
`;

export const Content = styled(BaseContent)`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  height: auto;

  & h2 {
    font-size: 4rem;
  }

  @media (max-width: ${dimensions.medium}) {
    padding: 4rem 3rem;

    & h2 {
      display: none;
    }
  }
  @media (max-width: ${dimensions.small}) {
    flex-direction: column;
  }
`;

const BaseFooterColumn = styled.div`
  & h3 {
    color: ${colors.colorLightLight};
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  & li a {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.8rem;

    border: 1px solid transparent;
    border-radius: 0.5rem;
    font-weight: lighter;
    font-size: 1.3rem;

    transition: border-color 0.2s;
  }

  & li a:hover {
    color: ${colors.colorLightLight};
    border-color: ${colors.colorLight};
  }
  & li a:active {
    color: ${colors.colorLightDark};
    border-color: ${colors.colorLightDark};
  }

  & li .icon {
    margin-right: 1rem;
  }
`;

export const Contact = styled(BaseFooterColumn)``;

export const Additional = styled(BaseFooterColumn)`
  margin-right: 10rem;
  margin-left: -10rem;

  @media (max-width: ${dimensions.small}) {
    margin: 3rem 0 0 0;
  }
`;
