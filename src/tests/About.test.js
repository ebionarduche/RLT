import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('testando se contém as informações sobre a Pokédex', () => {
  test('testando se contém um h2 c/ texto About Pokédex', () => {
    render(<About />);
    const aboutPokedex = screen.getByRole('heading', { name: /about pokédex/i });
    expect(aboutPokedex).toBeInTheDocument();
  });
  test('verifica contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<About />);
    const text01 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    const text02 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
    expect(text01).toBeInTheDocument();
    expect(text02).toBeInTheDocument();
  });
  test('verifica  se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About />);
    const img = screen.getByRole('img', { src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png' });
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(img).toBeInTheDocument();
  });
});
