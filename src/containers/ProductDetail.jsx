import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectProduct } from '../redux/actions/productActions';


export default function ProductDetail() {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId && productId !== "") {
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(res => res.json())
                .then(json => dispatch(selectProduct(json)));
        }
    }, [productId]);

    const { image, title, price, category, description } = product;

    return (
        <div>
            {Object.keys(product).length === 0 ? (<div>...Loading</div>) :
                <div class="ui unstackable items">
                    <div class="item">
                        <div class="image">
                            <img src={image} />
                        </div>
                        <div class="content">
                            <a class="header">{title}</a>
                            <div class="meta">
                                <span>{category}</span>
                            </div>
                            <div class="description">
                                <p>{description}</p>
                            </div>
                            <div class="extra">
                                <button class="negative ui button">Add To Card</button>
                                <span>
                                    <i class="dollar sign icon"></i>
                                    {price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
