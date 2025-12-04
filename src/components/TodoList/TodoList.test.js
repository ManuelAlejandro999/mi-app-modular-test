jest.mock('../../firebaseConfig', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  collection: () => ({}),
  query: () => ({}),
  orderBy: () => ({}),
  onSnapshot: (q, cb) => { cb({ forEach: () => {} }); return () => {}; },
  getDocs: () => Promise.resolve({ empty: true }),
  where: () => ({}),
  serverTimestamp: () => ({ seconds: Math.floor(Date.now() / 1000) }),
  addDoc: () => Promise.resolve(),
  doc: () => ({}),
  deleteDoc: () => Promise.resolve(),
  updateDoc: () => Promise.resolve(),
}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { ThemeProvider } from '../../context/ThemeContext';

test('renders TodoList heading and input', () => {
  render(
    <ThemeProvider>
      <TodoList />
    </ThemeProvider>
  );

  expect(screen.queryByText(/Lista de Tareas/i)).toBeTruthy();
  expect(screen.queryByPlaceholderText(/Añade una nueva tarea/i)).toBeTruthy();
});
