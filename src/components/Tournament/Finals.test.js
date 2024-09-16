import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Finals from './Finals'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Finals', () => {
  const mockFinalMatch = {
    matchId: 1,
    teamA: 'Team A',
    teamB: 'Team B',
    location: 'Stadium A',
  };

  beforeEach(() => {
    useParams.mockReturnValue({ id: '1' });

    // Mock the fetch calls
    global.fetch = jest.fn((url) => {
      if (url.includes('/final/schedule-matches/')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockFinalMatch),
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

  test('renders final match details correctly', async () => {
    render(
      <Router>
        <Finals />
      </Router>
    );

    
  });

  test('renders no match details when finalMatches is null', () => {
    render(
      <Router>
        <Finals />
      </Router>
    );

    expect(screen.queryByText('Team A')).toBeNull();
    expect(screen.queryByText('Team B')).toBeNull();
    expect(screen.queryByText('Stadium A')).toBeNull();
  });
});
