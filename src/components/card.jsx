import React from 'react';
import '../stylesheets/card.css';

const Card = ({ image, name, post, speaksAbout, enjoys }) => {
  return (
    <div className='card_container'>
      <img src={image} alt={name} className="card_image" />
      <p className="card_name">{name}</p>
      <p className="card_post">{post}</p>
      <p className='card_speaksAbout'>
        <em>Speaks about:</em> {speaksAbout}
      </p>
      <p className='card_enjoys'>
        <em>Enjoys:</em> {enjoys}
      </p>
    </div>
  );
};

export default Card;
