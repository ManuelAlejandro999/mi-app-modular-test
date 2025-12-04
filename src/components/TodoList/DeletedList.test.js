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
import DeletedList from './DeletedList';
import { ThemeProvider } from '../../context/ThemeContext';

test('shows no deleted tasks when snapshot is empty', async () => {
  render(
    <ThemeProvider>
      <DeletedList />
    </ThemeProvider>
  );

  expect(await screen.findByText(/No hay tareas eliminadas\.|Cargando eliminadas.../i)).toBeTruthy();
  expect(await screen.findByText(/No hay tareas eliminadas\./i)).toBeTruthy();
});
