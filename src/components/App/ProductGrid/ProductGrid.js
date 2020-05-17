import React, {useState, useEffect} from 'react';
import { toggleFavorite } from '../../../redux/reducers';
import { connect } from 'react-redux';
import { Checkbox } from '@material-ui/core';
import { ProductItem} from '../ProductItem'
import StackGrid from "react-stack-grid";
import { SContainer, SFormControlLabel, SButton } from './ProductGrid.styles';
import { PropTypes } from 'prop-types';

const ProductGrid = ({onlySelected, toggleFavorite}) => {
    const [productsShown, setProductsShown] = useState(20);
    const [onlyFavorites, setOnlyFavorites] = useState(false);
    useEffect(() => {
        if (onlySelected.length === 0) {
            setProductsShown(20);
        }
    }, [onlySelected.length]);

    let selectedProducts = onlySelected.length > 0 ? 
      onlySelected.reduce((allSelected, current) => {
          return allSelected.concat(current.products)
        },[]) : null;

        if (onlyFavorites){
            selectedProducts = selectedProducts.filter((product) => product.favorite);
        }

    const visibleProducts = selectedProducts ? 
    selectedProducts.map(product => 
      <ProductItem 
        key={product.id}
        favorite={product.favorite} 
        toggleFavorite={() => toggleFavorite({categoryId: product.categoryId, id: product.id})} 
        name={product.name} 
        images={product.variant_images}/>)
    : null;

return (selectedProducts ? <SContainer> 
    <SFormControlLabel
        control={<Checkbox onChange={() => setOnlyFavorites(!onlyFavorites)} />}
        label="Only Favorites"
      />
<StackGrid gutterWidth={40} gutterHeight={40} columnWidth={400}>
{visibleProducts.slice(0,productsShown)}
</StackGrid>
{productsShown > visibleProducts.length ? null : <SButton onClick={() => setProductsShown(productsShown + 20)}>Show more</SButton>}
</SContainer>: null)
}

const mapStateToProps = state => {
  return {
      onlySelected: state.filter((category) => category.selected)
  };
};
    
const mapDispatchToProps = { toggleFavorite }

ProductGrid.propTypes = {
    onlySelected : PropTypes.array,
    toggleFavorite: PropTypes.func,
  };
  
  ProductGrid.defaultProps = {
    onlySelected: [],
    toggleFavorite: () => {},
  };
            
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(ProductGrid);

export {ConnectedComponent as ProductGrid}
    