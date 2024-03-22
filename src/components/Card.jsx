// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating'; // Corrected import

import blogImg1 from '../assets/blog-1.png';

const Card = ({ course }) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2x1 mr-2 my-4'>
      <img src={blogImg1} className='h-40 w-full object-cover' alt='Select a course' />

      <div className='p-5 border border-b'>
        <h1 className='py-2 truncate'>{course.title}</h1>
        <StarRating rating={course.rating} /> {/* Use the StarRating component */}
      </div>
      <h3 className='p-5 text-xl'>{course.price}</h3>

      <div className='absolute top-0 bg-white m-3 px-2 py-1 rounded font-bold'>{course.category}</div>
    </div>
  );
}

// Prop types validation
Card.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
};

export default Card;
