import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/apple.png" },
  { src: "/img/blueberry.png" },
  { src: "/img/cherry.png" },
  { src: "/img/passion-fruit.png" },
  { src: "/img/pineapple.png" },
  { src: "/img/strawberry.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.src} alt='card front' />
              <img className='back' src='/img/cover.png' alt='card back' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
