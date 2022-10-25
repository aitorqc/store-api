import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';


export default function ProductListing() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch(setProducts(json)));
    }, []);

    return (
        <div class="ui inverted menu grid" inverted>
            <ProductComponent />
        </div>
    )
}
