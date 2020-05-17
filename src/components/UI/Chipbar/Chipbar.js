import React, {useState, useEffect} from 'react';
import { SProductsDiv, SNumberDiv, SChip, SLinearProgress, SFormControlLabel} from './Chipbar.styles';
import { toggleSelected, toggleSelectedAll } from '../../../redux/reducers';
import { connect } from 'react-redux';
import { capitalizeWords } from './../../../shared/utils';
import { Checkbox } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const Chipbar = ({onlyNames,toggleSelectedAll,toggleSelected, loading, pinNumber}) => {
  const [selectAll, setSelectAll] = useState(false);
  useEffect(() => { 
    if (onlyNames.length > 0 && onlyNames.every(category => category.selected)){
      setSelectAll(true);
    }
   },[onlyNames]);

  const onSelectAll = () => {
    if (onlyNames.every(category => category.selected)){
      setSelectAll(false);
      toggleSelectedAll(false);
    } else {
      setSelectAll(true);
      toggleSelectedAll(true);
    }
  }

  const onSelectCategory = (id) => {
    if (onlyNames.every(category => category.selected)){
      setSelectAll(false);
    }
    toggleSelected(id);
  }

return <>
  <SProductsDiv>
    {loading ? <SLinearProgress /> : <> 
      <SFormControlLabel
        control={<Checkbox onChange={onSelectAll} checked={selectAll} />}
        label="All"
      />
    {onlyNames.map((data) => {
        return (
            <SChip
              key={data.id}
              border={data.selected ? "2px solid dodgerblue" : "2px solid white"}
              onClick={() => onSelectCategory(data.id)}
              label={capitalizeWords(data.name)}
            />
        );
      })}
    </>}
  
  </SProductsDiv>
  <SNumberDiv><b>{pinNumber}</b> Pins</SNumberDiv></>}


const mapStateToProps = state => {
  return {
      onlyNames: state.map((product) => { 
        return { id: product.id, name: product.name, selected: product.selected }
      }),
      pinNumber: state.reduce((total, current)=> {
        return total + (current.selected ? current.products.length : 0);
      },0)
  };
};
    
const mapDispatchToProps = { toggleSelected, toggleSelectedAll }

Chipbar.propTypes = {
  onlyNames : PropTypes.array,
  toggleSelectedAll: PropTypes.func,
  toggleSelected: PropTypes.func,
  loading: PropTypes.bool,
  pinNumber: PropTypes.number,
};

Chipbar.defaultProps = {
  onlyNames : [],
  toggleSelectedAll: () => {},
  toggleSelected: () => {},
  loading: false,
  pinNumber: 0,
};
            
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Chipbar);


export {ConnectedComponent as Chipbar}
    