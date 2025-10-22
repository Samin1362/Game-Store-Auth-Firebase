import Card from './Card';
import React from 'react';

const Cards = ({games}) => {

  return (
    <div className='flex gap-4 items-center justify-center'>
      {
        games.map(game => <Card game={game}></Card>)
      }
    </div>
  );
};

export default Cards;