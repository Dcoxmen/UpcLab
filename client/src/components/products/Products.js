import React, { Fragment, useEffect, useState } from 'react';
//  import {Table} from 'react-bootstrap';
import axios from 'axios'
 import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
import cellEditFactory, {Type} from 'react-bootstrap-table2-editor'
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
// import ProductItem from './ProductItem';
//import ProductTable from './ProductTable'
import Spinner from '../layout/Spinner';
import { useProducts, getProducts,setCurrent } from '../../context/product/ProductState';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Modal, Button } from 'react-bootstrap'
//import { get } from 'config';



const Products = () => {
    const [productState, productDispatch] = useProducts();
    const { products} = productState;

   
    const[modalInfo, setModalInfo] = useState([])
    const[showModal, setShowModal] = useState(false)
    const[show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    

    
 

    const columns = [{
      dataField: 'productname',
      text: 'Product Name',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'upc',
      text: 'UPC Code',
      sort: true,
      filter: textFilter()
    },{
      dataField: 'modelsku',
      text: 'SKU',
      sort: true,
      filter: textFilter()
    },{
      dataField: 'innercarton',
      text: 'Inner Carton',
      sort: true,
      filter: textFilter()
    },{
      dataField: 'mastercarton',
      text: 'Master Carton',
      sort: true,
      filter: textFilter()
    },{
      dataField: 'producttype',
      text: 'Product Type',
      sort: true,
      filter: textFilter()

    },{
      dataField: 'productline',
      text: 'Product Line',
      sort: true,
      filter: textFilter()
    },{
      dataField: 'devicebrand',
      text: 'Device Brand',
      sort: true,
      filter: textFilter()
    },{
      dataField: 'devicetype',
      text: 'Device Type',
      sort: true,
      filter: textFilter()
    },{
      dataField: 'specs',
      text: 'Specs',
      sort: true
     
    }

  ];

 
    useEffect(() => {
      getProducts(productDispatch);
    }, [productDispatch]);
  
    if (products !== null && products.length === 0) {
      return <h4>Please add a product</h4>;
    };

    const rowEvents = {
      onClick: (e, row) => {
          console.log(row)
          setModalInfo(row)
          toggleTrueFalse()
      }
  };

  const toggleTrueFalse = () => {
      setShowModal(handleShow)
  };




  const ModalContent = () =>{
      return(
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>{modalInfo.products}</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>

          </Modal>

      )
  };

  
    return (
     
      
      <Fragment>
        
            {products !== null ? (
        
          <TransitionGroup>
            <BootstrapTable
          
            condensed
            striped
            hover
            keyField='_id'
            data={ products } 
            columns={ columns } 
            pagination={ paginationFactory() }
            rowEvents={rowEvents}
            filter={ filterFactory() }
            cellEdit={cellEditFactory({
              mode: 'dbclick',
              blurToSave: true

            })
          }
            />
              {show ? <ModalContent/> : null}
           
          
            

            
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
  
  export default Products;
  