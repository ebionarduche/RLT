import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('5. Teste o componente <Pokedex.js />', () => {
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
    expect(typebtn.some((btn) => btn.textContent === 'All')).toBe(false);
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btnFire = screen.getByRole('button', { name: /fire/i });
    const btnBug = screen.getByRole('button', { name: /bug/i });
    const btnNormal = screen.getByRole('button', { name: /normal/i });
    const btnAll = screen.getByRole('button', { name: /all/i });

    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();

    userEvent.click(btnFire);
    const pikachu2 = screen.queryByText(/pikachu/i);
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
    expect(pikachu2).not.toBeInTheDocument();

    userEvent.click(btnBug);
    const pikachu3 = screen.queryByText(/pikachu/i);
    const caterpie = screen.getByText(/caterpie/i);
    expect(caterpie).toBeInTheDocument();
    expect(pikachu3).not.toBeInTheDocument();

    userEvent.click(btnNormal);
    const pikachu4 = screen.queryByText(/pikachu/i);
    const snorlax = screen.getByText(/snorlax/i);
    expect(snorlax).toBeInTheDocument();
    expect(pikachu4).not.toBeInTheDocument();

    userEvent.click(btnAll);
    const caterpie2 = screen.queryByText(/caterpie/i);
    const charmander2 = screen.queryByText(/charmander/i);
    const snorlax2 = screen.queryByText(/snorlax/i);
    const ekans = screen.queryByText(/ekans/i);

    expect(pikachu).toBeInTheDocument();
    expect(caterpie2).not.toBeInTheDocument();
    expect(charmander2).not.toBeInTheDocument();
    expect(snorlax2).not.toBeInTheDocument();
    expect(ekans).not.toBeInTheDocument();
  });
});
