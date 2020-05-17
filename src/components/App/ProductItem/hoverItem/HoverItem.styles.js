import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const SHover = styled.div`
&& {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: grid;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 1;
  }
}
`;


export const SButton = styled(Button)`
&& {
  width: 100px;
  cursor: pointer;
  text-transform: none;
  margin: 10px 10px 0 0;
  background-color: red;
  height: 40px;
  justify-self: right;
  color: white
}
`;

export const STitle = styled.div`
&& {
  text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em white;
  align-self: end;
  margin: 0 0 10px 0;
  font-size: 24px;
}
`;