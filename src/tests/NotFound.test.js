import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('testando se contém as informações sobre a Pokédex', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);
    const NotFoundMessage = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(NotFoundMessage).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem', () => {
    render(<NotFound />);
    const img = screen.getByRole('img', { name: /pikachu crying because the page requested was not found/i });
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(img).toBeInTheDocument();
  });
});
