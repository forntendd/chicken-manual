import React, { useState } from 'react';

const AddMenuForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [sauces, setSauces] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, sauces: sauces.split(',').map((s) => s.trim()) });
    setName('');
    setSauces('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-menu-form">
      <input
        type="text"
        placeholder="메뉴 이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="소스 (콤마로 구분)"
        value={sauces}
        onChange={(e) => setSauces(e.target.value)}
      />
      <button type="submit">메뉴 추가</button>
    </form>
  );
};

export default AddMenuForm;
