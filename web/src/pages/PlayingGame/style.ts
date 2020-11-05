import styled from "styled-components";
import { BaseContainer, BaseContent } from "../../styles/common";
import { colors } from "../../styles/global";

export const Container = styled(BaseContainer)`

`;

export const Content = styled(BaseContent)`
  padding: 0;
  margin: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & canvas {
    border: 1px solid ${colors.colorLightLight};
  }
`;
