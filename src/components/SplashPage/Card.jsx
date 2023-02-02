/** @format */

import React from 'react';

export default function Card({ children }) {
  return (
    <div
      data-testid="card"
      className="card"
    >
      {children}
    </div>
  );
}
