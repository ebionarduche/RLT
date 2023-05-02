import React from 'react';
import { screen, render } from '@testing-library/react';
import FavoritePokemon from '../pages/FavoritePokemon';

describe(' Ao favoritar a partir da página de detalhes teste se:', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    render(<FavoritePokemon />);
    const found = screen.queryByText('No favorite Pokémon found');
    expect(found).toBeInTheDocument();
  });
});
