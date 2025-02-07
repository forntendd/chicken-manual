import React, { useState } from 'react';
import menuData from '../data/menuData.json';

const RandomQuestion = () => {
  const [question, setQuestion] = useState('');

  // 🎲 랜덤 문제 생성
  const generateRandomQuestion = () => {
    const categories = menuData.categories;
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomMenu =
      randomCategory.items[
        Math.floor(Math.random() * randomCategory.items.length)
      ];

    setQuestion(`${randomMenu.name} 메뉴를 주문하면 어떤 세팅이 필요한가요?`);
  };

  return (
    <div className="random-question">
      <button onClick={generateRandomQuestion}>랜덤 문제 출제</button>
      {question && <p>{question}</p>}
    </div>
  );
};

export default RandomQuestion;
