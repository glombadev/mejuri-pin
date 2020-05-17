import styled from 'styled-components';
import { Chip, FormControlLabel } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

export const SProductsDiv = styled.div`
&& {
  height: 50px;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: none;
  display: flex;
  scrollbar-width: thin;
}
`;

export const SNumberDiv = styled.div`
&& {
  margin: auto;
}
`;


export const SChip = styled(Chip)`
&& {
    background-color: #FFF;
  border: ${props => props.border};
}
`;

export const SLinearProgress = styled(LinearProgress)`
&& {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
}
`;

export const SFormControlLabel = styled(FormControlLabel)`
&& {
    margin-left: 0px
}
`;