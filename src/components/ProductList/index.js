import Product from '../Product'
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Grid } from '@chakra-ui/react'
import React from 'react';
function ProductList() {
    const { items } = useSelector(state => state.products)
    return (
        <Grid mt={'60px'} padding={10} templateColumns='repeat(4, 1fr)' gap={6}>
            {items && (
                items.map(item => (
                    <Product key={nanoid()} item={item} />
                ))
            )}
        </Grid>
    )
}

export default React.memo(ProductList)