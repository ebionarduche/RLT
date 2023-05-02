import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';
import FavoritePokemon from '../pages/FavoritePokemon';

describe(' Ao favoritar a partir da página de detalhes teste se:', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    const favoritePokemon = [];
    renderWithRouter(<FavoritePokemon pokemonList={ favoritePokemon } />);

    const NoFavoriteFound = screen.queryByText('No favorite Pokémon found');
    expect(NoFavoriteFound).toBeInTheDocument();
  });

  it('Teste se apenas são exibidos os Pokémon favoritados.', () => {
    renderWithRouter(<FavoritePokemon pokemonList={ pokemonList } />);

    pokemonList.forEach((pokemon) => {
      const pokeName = screen.queryByText(pokemon.name);
      expect(pokeName).toBeInTheDocument();
    });
  });
});
