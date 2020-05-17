import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux'
import { Topbar } from '../UI/Topbar';
import { updateList} from '../../redux/reducers/';
import axios from 'axios';
import { ProductGrid } from '../App/ProductGrid';
import { PropTypes } from 'prop-types';

const Home = ({updateList}) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          const result = await axios(
            'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json',
          );
          updateList(result.data.map((category) => {
              const products = category.products.map((product) => { return {...product, categoryId: category.id }});
              setLoading(false);
            return { ...category, selected: false, products: [...products]}
        }));
        };
        fetchData();
        
      }, [updateList]);

    return (
        <div className="Home">
          <Topbar loading= {loading} />
          <ProductGrid />
        </div>
      )}

const mapDispatchToProps = { updateList }

Home.propTypes = {
    updateList: PropTypes.func,
  };
  
  Home.defaultProps = {
    updateList: () => {},
  };
        
export default connect(
  null,
  mapDispatchToProps
)(Home);
