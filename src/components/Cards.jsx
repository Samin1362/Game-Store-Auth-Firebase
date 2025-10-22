import Card from './Card';

const Cards = ({games}) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center'>
      {
        games.map(game => <Card key={game.id} game={game}></Card>)
      }
    </div>
  );
};

export default Cards;