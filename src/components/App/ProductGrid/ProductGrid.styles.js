import styled from 'styled-components';
import { FormControlLabel, Button } from '@material-ui/core';

export const SContainer = styled.div`
&& {
  margin: 20px 0 20px 0;
}
`;

export const SFormControlLabel = styled(FormControlLabel)`
&& {
  display:flex;
  margin-left: 20px;
  margin-bottom: 5px;
}
`;

export const SButton = styled(Button)`
&& {
  margin: 20px 0 20px 0;
}
`;
