import React, {Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import BootStrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { Modal, Button } from 'react-bootstrap'
import { useProducts, getProducts,setCurrent } from '../../context/product/ProductState';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import Spinner from '../layout/Spinner';




const ProductTable = () => {
 
  const [productState, productDispatch] = useProducts();
  const { products} = productState;


//   const columns = [{
//     dataField: 'productname',
//     text: 'Product Name',
//     sort: true,
//     filter: textFilter()
//   }, {
//     dataField: 'upc',
//     text: 'UPC Code',
//     sort: true,
//     filter: textFilter()
//   },{
//     dataField: 'modelsku',
//     text: 'SKU',
//     sort: true,
//     filter: textFilter()
//   },{
//     dataField: 'innercarton',
//     text: 'Inner Carton',
//     sort: true,
//     filter: textFilter()
//   },{
//     dataField: 'mastercarton',
//     text: 'Master Carton',
//     sort: true,
//     filter: textFilter()
//   },{
//     dataField: 'producttype',
//     text: 'Product Type',
//     sort: true,
//     filter: textFilter()

//   },{
//     dataField: 'productline',
//     text: 'Product Line',
//     sort: true,
//     filter: textFilter()
//   },{
//     dataField: 'devicebrand',
//     text: 'Device Brand',
//     sort: true,
//     filter: textFilter()
//   },{
//     dataField: 'devicetype',
//     text: 'Device Type',
//     sort: true,
//     filter: textFilter()
//   },{
//     dataField: 'specs',
//     text: 'Specs',
//     sort: true
   
//   }

// ];



  useEffect(() => {
    getProducts(productDispatch);
  }, [productDispatch]);

  if (products !== null && products.length === 0) {
    return <h4>Please add a product</h4>;
  }

  return (
   
    
    <Fragment>
      
          {products !== null ? (
      
        <TransitionGroup>
          {/* <BootstrapTable
          remote
          condensed
          striped
          hover
          keyField='_id'
          data={ products } 
          columns={ columns } 
          pagination={ paginationFactory() }
          filter={ filterFactory() }
          cellEdit={cellEditFactory({
            mode: 'dbclick',
            blurToSave: true

          })
        }
          >
           
          </BootstrapTable> */}
        
          

          
          {/* <Table striped hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>UPC</th>
              <th>Type</th>
            </tr>
          </thead>
        <tbody>
      
          {filtered !== null
            ? filtered.map((product) => (
                <CSSTransition
                  key={product._id}
                  timeout={500}
                  classNames='item'
                >
                 <tr><ProductItem product={product} /></tr> 
                </CSSTransition>
              ))
            : products.map((product) => (
                <CSSTransition
                  key={product._id}
                  timeout={500}
                  classNames='item'
                >
              <tr><ProductItem product={product} /></tr>
                </CSSTransition>
              ))}
              
            </tbody>
            </Table> */}
           

        </TransitionGroup> 
        
      ) : (
        <Spinner />
      )} 
   </Fragment>
   
   
  );
};

export default ProductTable;