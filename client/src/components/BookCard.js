import React from 'react';
import {Link} from "react-router-dom";
const BookCard = ({book}) => {
    const options = {
        size : "large",
        readOnly : true,
        precision :0.5,
    };

  return (
      <Link className="productCard" to={`/product/${book.id}`}>
          <img src={book.coverImagePath} alt={book.title}/>
          <p>{book.title}</p>
          <span>{`${book.price}VND`}</span>
      </Link>
  )
};

export default BookCard;
