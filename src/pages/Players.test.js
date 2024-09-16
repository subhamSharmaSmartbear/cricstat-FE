import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Players from './Players'; 

// Mock the Error component
jest.mock('../components/Utilities/Error', () => () => <div>Error Component</div>);

describe('Players', () => {
  const mockPlayers = [
    { id: 1, name: 'Player 1', specialization: 'Batsman' },
    { id: 2, name: 'Player 2', specialization: 'Bowler' },
  ];

  beforeEach(() => {
   
    global.fetch = jest.fn((url) => {
      if (url.includes('/players/all')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPlayers),
        });
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders player cards when data is available', async () => {
    
    render(<Players />);
    
    
    await waitFor(() => {
      mockPlayers.forEach(player => {
        expect(screen.getByText(player.name)).toBeInTheDocument();
        expect(screen.getByText(player.specialization)).toBeInTheDocument();
      });
    });
  });

  
});
