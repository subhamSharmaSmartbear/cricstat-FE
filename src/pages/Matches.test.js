import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Matches from './Matches'; 

// Mock the LiveMatches component
jest.mock('../components/Matches/LiveMatches', () => ({ matches }) => (
  <div>Live Matches Component with {matches ? matches.length : 0} matches</div>
));

describe('Matches', () => {
  const mockMatches = [
    { id: 1, team1: 'Team A', team2: 'Team B', status: 'Live' },
    { id: 2, team1: 'Team C', team2: 'Team D', status: 'Scheduled' },
  ];

  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url.includes('/get-all-matches')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMatches),
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

  test('renders Live Matches component with matches when data is available', async () => {
    render(<Matches />);
    
    await waitFor(() => {
      expect(screen.getByText(`Live Matches Component with ${mockMatches.length} matches`)).toBeInTheDocument();
    });
  });

  test('renders Live Matches component with 0 matches when no data is available', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );

    render(<Matches />);
    
    await waitFor(() => {
      expect(screen.getByText('Live Matches Component with 0 matches')).toBeInTheDocument();
    });
  });
});
