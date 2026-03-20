import "./header.css";

const Header = ({ score, bestScore }) => {
  return (
    <div className="headerContainer">
      <div className="leftHeader">
        <p className="headerTitle">Dog Memory Game</p>
        <p className="headerDescription">
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div className="rightHeader">
        <p className="score">Score: {score} </p>
        <p className="bestScore">Best score: {bestScore}</p>
      </div>
    </div>
  );
};

export default Header;
