import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testa se o topo aplicação contém links fixos de navegação', () => {
  it('Os links devem possuir os textos específicos', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    const linkAbout = screen.getByRole('link', { name: /about/i });
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    const navigation = [linkHome, linkAbout, linkFavorite];
    navigation.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
