import Card from "./Card";

const Cards = ({ games }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
      {games.map((game, index) => (
        <Card key={game.id} game={game} index={index}></Card>
      ))}
    </div>
  );
};

export default Cards;
