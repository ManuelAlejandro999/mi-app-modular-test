// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// --- Mocks globales para pruebas ---
// Mock del archivo de configuración de Firebase para evitar inicializaciones reales
jest.mock('./firebaseConfig', () => ({
	db: {},
}));

// Mock básico de las funciones de firestore que usan los componentes.
jest.mock('firebase/firestore', () => ({
	collection: jest.fn(),
	query: jest.fn(),
	orderBy: jest.fn(),
	where: jest.fn(),
	onSnapshot: jest.fn((q, cb) => {
		// Simula una snapshot vacía que tiene forEach
		const snap = { forEach: () => {} };
		// Llamar al callback de datos (como si no hubiera documentos)
		if (typeof cb === 'function') cb(snap);
		// Retornar función unsubscribe
		return jest.fn();
	}),
	addDoc: jest.fn(),
	doc: jest.fn(),
	deleteDoc: jest.fn(),
	updateDoc: jest.fn(),
	getDocs: jest.fn(() => Promise.resolve({ empty: true })),
	serverTimestamp: jest.fn(() => ({ seconds: Math.floor(Date.now() / 1000) })),
}));

// Mock global fetch usado por UserDirectory
global.fetch = jest.fn(() =>
	Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
);

// (react-router-dom is mocked per-test where needed to avoid requiring the package)
 
