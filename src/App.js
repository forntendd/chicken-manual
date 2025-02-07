import React, { useState } from 'react';
import Category from './components/Category';
import AddMenuForm from './components/AddMenuForm';
import RandomQuestion from './components/RandomQuestion';
import menuData from './data/menuData.json';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // 검색 필터 적용
  const filteredCategories = menuData.categories.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="App">
      <h1>🍗 홀 메뉴얼 🍺</h1>

      {/* 🔍 검색창 */}
      <input
        type="text"
        placeholder="메뉴 검색..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      {/* ➕ 메뉴 추가 폼 */}
      <AddMenuForm />

      {/* 🎲 랜덤 문제 출제 */}
      <RandomQuestion />

      {/* 카테고리 목록 */}
      {filteredCategories.map((category, index) => (
        <Category key={index} {...category} />
      ))}
    </div>
  );
}

export default App;
