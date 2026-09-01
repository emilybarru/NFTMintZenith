// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTMintZenith title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTMintZenith/i);
    expect(titleElement).toBeInTheDocument();
});
