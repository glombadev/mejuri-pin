import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { SAppBar, SToolbar } from './Topbar.styles';
import { Chipbar } from '../Chipbar';

const HideOnScroll = ({children}) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export const Topbar = ({loading}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <SAppBar elevation={0}>
          <SToolbar>
            <Chipbar loading={loading} />
          </SToolbar>
        </SAppBar>
      </HideOnScroll>
      <SToolbar />
    </React.Fragment>
  );
}

Topbar.propTypes = {
  loading: PropTypes.bool,
};

Topbar.defaultProps = {
  loading: false,
};