import styled from "styled-components";
import { BaseContent } from "../../../styles/common";
import { colors, dimensions } from "../../../styles/global";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.colorLightLight};

  & h2 {
    color: ${colors.colorDark};
    font-size: 6rem;
    margin-bottom: 2rem;
  }

  & p {
    color: ${colors.colorDark};
    text-indent: 2rem;
    margin: 1rem 0rem;
    font-size: 1.8rem;
  }

  & a {
    color: rgb(44, 96, 156);
  }
`;

export const Content = styled(BaseContent)`
  @media (max-width: ${dimensions.medium}) {
    & img {
      width: 18rem;
    }
  }

  @media (max-width: ${dimensions.small}) {
    & img {
      display: none;
    }
  }
`;

export const About = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "title title title"
    "text text image";

  & img {
    grid-area: image;
    transform: scaleX(-1);
    width: 20rem;
    margin: 0rem 0rem 0rem 5rem;
  }

  & div {
    grid-area: text;
  }

  & h2 {
    grid-area: title;
  }

  @media (max-width: ${dimensions.medium}) {
    & img {
      margin-left: 2rem;
      margin-right: 0rem;
      width: 18rem;
    }
  }

  @media (max-width: ${dimensions.small}) {
    display: flex;
    flex-direction: column;

    & h2 {
      text-align: left;
    }
  }
`;

export const Tutorial = styled(About)`
  margin-top: 5rem;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    ". title title"
    "image text text";

  & h2 {
    text-align: right;
  }

  & img {
    width: 18rem;
    margin: 0rem 5rem 0rem 0rem;
  }

  & ul {
    display: inline-block;
    border-radius: 1rem;
    margin: 2rem 0rem 0rem 0rem;
    padding: 1rem 3rem 1rem 1rem;
    background-color: ${colors.colorLight};
    font-size: 1.8rem;
    padding-left: 1rem;
  }
  & li {
    margin: 1rem;
  }

  @media (max-width: ${dimensions.small}) {
    display: block;

    & h2 {
      text-align: left;
    }
    & ul {
      padding-left: 3rem;
      display: block;
    }
  }
`;
