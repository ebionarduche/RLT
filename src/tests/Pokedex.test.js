import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const encounteredPokemon = screen.getByRole('heading', { name: /encountered pokémon/i });
    expect(encounteredPokemon).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const pikachu = screen.queryByRole('img', { name: /pikachu sprite/i });
    expect(pikachu).toBeInTheDocument();
    const buttonNext = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(buttonNext);
    const charmander = screen.queryByRole('img', { name: /charmander sprite/i });
    expect(charmander).toBeInTheDocument();
  });
  it('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);
    const typebtn = screen.getAllByTestId('pokemon-type-button');
    const pokemonTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    typebtn.forEach((btn, index) => {
      expect(btn).toHaveTextContent(pokemonTypes[index]);
    });
  });
  it('', () => {

  });
});
