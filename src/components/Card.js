import "./Card.css";

function Card({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className='card' key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          onClick={handleClick}
          src='/img/cover.png'
          alt='card back'
        />
      </div>
    </div>
  );
}

export default Card;
