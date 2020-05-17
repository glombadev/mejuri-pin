import React from 'react';
import { SHover, SButton, STitle } from './HoverItem.styles';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { PropTypes } from 'prop-types';

export const HoverItem = ({name, favorite, toggleFavorite}) => {
  const icon = favorite ? <Favorite /> : <FavoriteBorder />;
  const text = favorite ? "Unsave" : "Save";

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite();
  }

return (<SHover > 
  <SButton variant="contained" onClick={handleToggleFavorite} startIcon={icon}>{text}</SButton>
  <STitle>{name}</STitle>
</SHover>)
} 

HoverItem.propTypes = {
  name : PropTypes.string,
  favorite: PropTypes.bool,
  toggleFavorite: PropTypes.func
};

HoverItem.defaultProps = {
  name : '',
  favorite: false,
  toggleFavorite: () => {}
};