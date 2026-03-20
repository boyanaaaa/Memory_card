import "./App.css";
import SingleCard from "./components/singleCard";
import Header from "./components/header/header";
import { useState } from "react";

function App() {
  const initialCards = [
    {
      id: 1,
      name: "Dog 1",
      image:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRpMm5iam1qMmxnemt1bXo0YWg3dGYxdnJ6Nm51c2x2d2ZvdDQ5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vNTIkYpoAUb22FhsVr/giphy.gif",
      clicked: false,
    },
    {
      id: 2,
      name: "Dog 2",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VnZDcwdHkzcXpuczBwMXY5dG9kdXhtZHFsazVmY2JjNDB1eWliayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fu3OjBQiCs3s0ZuLY3/giphy.gif",
      clicked: false,
    },
    {
      id: 3,
      name: "Dog 3",
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGdmbG41aWk3bm11eGsyb2JwaDl3Yzl0OHU4dXA0a3c0NWpjMmczaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sWBzg2D15WwQjHcxbt/giphy.gif",
      clicked: false,
    },
    {
      id: 4,
      name: "Dog 4",
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjE2emU0YzNleWR4YmJ2bWJobndiaXY3dnlkcnpyazhudmphMTM5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qITmCEKXJBqIE/giphy.gif",
      clicked: false,
    },
    {
      id: 5,
      name: "Dog 5",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGFzdGF6dTA2MXB2M3I2OTZwYm41cW0yZm0waXdwM2Q0amtudWR6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dd3VGXFR5TX1u/giphy.gif",
      clicked: false,
    },
    {
      id: 6,
      name: "Dog 6",
      image:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RoeGprdzVuZ2Z6enYxNXVlMm5wYzR4MjVuM2drZ291b2x0YThlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fHr2GbZEWLqNNXgmOF/giphy.gif",
      clicked: false,
    },
    {
      id: 7,
      name: "Dog 7",
      image:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG5uMDd1bTh0cm11YmMzMXk4Nzdqdm9hNjZnY2dhNDc4Y3gwazd3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ndAvMC5LFPNMCzq7m/giphy.gif",
      clicked: false,
    },
    {
      id: 8,
      name: "Dog 8",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnAzODJ2ZzE5a2kyaHVteHVwc24wNjJlMGwzOHM0bW9qcHBwY2IybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pHZdGyFNp5sUXq4jp5/giphy.gif",
      clicked: false,
    },
    {
      id: 9,
      name: "Dog 9",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjAzMHN6ajR2dzgxbmlodWd0eWpqa3kwdTZmbXV1YnVxNmJjN2cxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7Jplyo45Cd8Pp8A4PO/giphy.gif",
      clicked: false,
    },
    {
      id: 10,
      name: "Dog 10",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnB3dmozaW00aDIyemN5NTl0dmM0N2J5d3kxcXY4MTF6cmd0d2JtZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y4pAQv58ETJgRwoLxj/giphy.gif",
      clicked: false,
    },
    {
      id: 11,
      name: "Dog 11",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGl5YXR2ZWdhaHM1dzQwNzE2dm8xa2F1ZTkwOGYyd3pvbzczNThkcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3MgNtJdcPWp5eC9cNr/giphy.gif",
      clicked: false,
    },
    {
      id: 12,
      name: "Dog 12",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajJhcDR1ejQwZmZkenpxYTAydWFsYno4cjNybmJnYWJ1YTY0N3JwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oOKZH64fE4URpY3OS2/giphy.gif",
      clicked: false,
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function handleCardClick(id) {
    setCards((prevCards) => {
      const clickedCard = prevCards.find((c) => c.id === id);

      if (clickedCard.clicked) {
        setScore(0);
        return prevCards.map((c) => ({ ...c, clicked: false }));
      }

      const newCards = prevCards.map((c) =>
        c.id === id ? { ...c, clicked: true } : c,
      );

      const newScore = score + 1;
      setScore(newScore);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      return shuffle(newCards);
    });
  }

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <div className="cardsContainer">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
