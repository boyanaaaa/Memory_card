import "./singleCard.css";

const SingleCard = ({ card, onClick }) => {
  return (
    <div className="singleCard" onClick={onClick}>
      <img src={card.image} alt={card.name} />
      <p className="cardTitle">{card.name}</p>
    </div>
  );
};

export default SingleCard;
