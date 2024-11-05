import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <Routes>
      <Route path="accept" element={<h1>Vista para aceptar</h1>} />
      <Route path="history-accepts" element={<h1>Vista del historial</h1>} />
    </Routes>
  );
};

export default Admin