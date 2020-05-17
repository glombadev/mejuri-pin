import styled from 'styled-components';
import { Card, CircularProgress } from '@material-ui/core';

export const SCard = styled(Card)`
&& {
    
}
`;

export const SNumberDiv = styled.div`
&& {
  margin: auto;
}
`;


export const SCardActionArea = styled.div`
&& {
    position: relative;
    cursor: default;
    display: flex;
}
`;

export const SCardMedia = styled.img`
&& {
    display: ${props => props.display};
}
`;

export const SCircularProgress = styled(CircularProgress)`
&& {
    margin: 180px;
}
`;