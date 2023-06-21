import { Box } from '@mui/material';
import React from 'react'
import Product from '../product';

function AddProduct() {
  return (
    <Box>
            <Product addProduct={true}/>
    </Box>
  )
}

export default AddProduct;
