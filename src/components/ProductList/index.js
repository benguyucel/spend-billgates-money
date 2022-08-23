import React from 'react'
import Product from '../Product'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { fetchProducts } from '../../redux/slice/productSlice';
import { Grid } from '@chakra-ui/react'
function ProductList() {
    const { items } = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                {items && (
                    items.map(item => (
                        <Product key={nanoid()} item={item} />
                    ))
                )}
            </Grid>
        </div>
    )
}

export default ProductList