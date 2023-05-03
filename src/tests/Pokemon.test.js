import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('6. Teste o componente <Pokemon.js />', () => {
  it('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    const electric = screen.getByTestId('pokemon-type');
    expect(electric).toHaveTextContent('Electric');
  });

  it('O nome correto do Pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const Pokename = screen.getByTestId('pokemon-name');
    expect(Pokename).toHaveTextContent('Pikachu');
  });

  it('O peso médio do Pokémon deve ser exibido ', () => {
    renderWithRouter(<App />);
    const averageWeight = screen.getByText(/average weight: 6\.0 kg/i);
    expect(averageWeight).toHaveTextContent('Average weight: 6.0 kg');
  });
  it('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });

  it('A imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img.alt).toBe('Pikachu sprite');
  });

  it('É exibido na tela um link com o href /pokemon/<id>', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkDetails.href).toContain('/pokemon/25');
  });

  it('A imagem de favorito star possui o src e alt corretos', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);

    const favoritePoke = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(favoritePoke);

    const starFavorite = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(starFavorite.src).toBe('http://localhost/star-icon.svg');
    expect(starFavorite.alt).toBe('Pikachu is marked as favorite');
  });
});
