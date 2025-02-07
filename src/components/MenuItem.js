import React from 'react';

const MenuItem = ({ name, additionalSetting = [], sauces = [] }) => (
  <div className="menu-item">
    <h3>{name}</h3>
    {additionalSetting.length > 0 && (
      <p>추가 세팅: {additionalSetting.join(', ')}</p>
    )}
    {sauces.length > 0 && <p>소스: {sauces.join(', ')}</p>}
  </div>
);

export default MenuItem;
