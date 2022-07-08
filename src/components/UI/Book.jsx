import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Price from './Price';
import { useRef } from 'react';

const Book = ({book}) => {
    const [img, setImg]=useState();

    const mountedRef=useRef(true);// stops rerendering

    useEffect(()=>
    {
        const image = new Image();
        image.src=book.url;
        image.onload=() =>{
            setTimeout(()=>{
                setImg(image)}, 300)    
        }
        return ()=>{
            //when component unmounts
            mountedRef.current= false;
        }
    })


    return (
        <div className="book">
            {
                img ?
                <>
                <a href={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={img.src} alt="" className="book__img"/>
                </figure>
            </a>
            <div className="book__title">
                <a href={`/books/${book.id}`}  className='book__title--link'>
                    {book.title}
                </a>
            </div>
            <Rating rating ={book.rating} />
            <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
            </> : <>
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
            </>
            }
            
            
        </div>
    );
}

export default Book;
