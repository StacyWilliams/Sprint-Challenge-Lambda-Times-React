import React, { Component } from 'react';
import Card from './Card';
import Proptypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => {return <Card card = {card} /> })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;