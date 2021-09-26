import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    console.log(props.data.rating)
    const {name,image,description,ReleaseDate,price,director,rating} =(props.data)
    return (
        <div className='card'>
            <img src={image} alt="" />
            <div className='card-info'>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Released on : {ReleaseDate}</p>
            <p>Directed by: {director}</p>
            <p>Ratings: <Rating initialRating={rating}  emptySymbol="far fa-star"
  fullSymbol="fas fa-star" readonly/></p>
            
            </div>
            <button onClick={()=>props.handleCart(props.data)} className='card-btn'>Watch Now only for {price}$</button>
        </div>
    );
};

export default Product;