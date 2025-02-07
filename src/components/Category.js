import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './Category.css';

const Category = ({ name, defaultSetting, items }) => {
  const [isOpen, setIsOpen] = useState(false); // ✅ 메뉴 펼치기 상태 추가

  return (
    <div className="category">
      {/* 버튼 클릭 시 상태 변경 */}
      <button className="category-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '▼ ' : '▶ '} {name} {/* 🔽, ▶ 아이콘으로 접힘/펼침 표시 */}
      </button>

      {/* 메뉴 목록 (isOpen이 true일 때만 보이도록 설정) */}
      {isOpen && (
        <div className="category-content">
          <p>기본 세팅: {defaultSetting.join(', ')}</p>
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
