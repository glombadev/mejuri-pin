import React, {useState, useEffect} from 'react';
import { MobileStepper, Button } from '@material-ui/core';
import { SCard, SCardActionArea, SCardMedia, SCircularProgress } from './ProductItem.styles';
import { HoverItem } from './hoverItem/HoverItem';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { PropTypes } from 'prop-types';

export const ProductItem = ({name, images, favorite, toggleFavorite}) => {
    const [loading, setLoading] = useState(false);
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => setLoading(true), []);
    const maxImages = images.length;

    const onNextImage = () => {
        setLoading(true);
        setActiveImage(activeImage + 1);
    } 

    const onPreviousImage = () => {
        setLoading(true);
        setActiveImage(activeImage -1);
    } 

return (<SCard > 
    <SCardActionArea >
        <HoverItem name={name} favorite={favorite} toggleFavorite={toggleFavorite} />
        {loading ? <SCircularProgress /> : null }
        <SCardMedia
        component="img"
        height="400"
        display={loading ? 'none' : ''}
        src={images[activeImage].attachment_url_medium}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
        
      </SCardActionArea>

      <MobileStepper
        steps={maxImages}
        position="static"
        variant="text"
        activeStep={activeImage}
        nextButton={
          <Button size="small" onClick={onNextImage} disabled={activeImage === maxImages - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={onPreviousImage} disabled={activeImage === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
</SCard>)
} 

ProductItem.propTypes = {
    name : PropTypes.string,
    images: PropTypes.array,
    favorite: PropTypes.bool,
    toggleFavorite: PropTypes.func
  };
  
  ProductItem.defaultProps = {
    name : '',
    images: [],
    favorite: false,
    toggleFavorite: () => {}
  };