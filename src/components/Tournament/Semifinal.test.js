import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Semifinal from './Semifinal'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Semifinal', () => {
  const mockSemiFinalMatches = [
    {
      matchId: 1,
      matchStage: 'Semi-final',
      matchType: 'T20',
      location: 'Stadium A',
      teamA: 'Team A',
      teamB: 'Team B',
      live: true,
    },
    {
      matchId: 2,
      matchStage: 'Semi-final',
      matchType: 'ODI',
      location: 'Stadium B',
      teamA: 'Team C',
      teamB: 'Team D',
      live: false,
    },
  ];

  beforeEach(() => {
    useParams.mockReturnValue({ id: '1' });

    global.fetch = jest.fn((url) => {
      if (url.includes('/semifinal/schedule-matches/')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSemiFinalMatches),
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

  

  test('renders no matches message when semiFinalMatches prop is empty', () => {
    render(
      <Router>
        <Semifinal />
      </Router>
    );

    expect(screen.queryByText('LIVE')).toBeNull();
    expect(screen.queryByText('Semi-final')).toBeNull();
    expect(screen.queryByText('T20 - Match -1')).toBeNull();
    expect(screen.queryByText('Stadium A')).toBeNull();
    expect(screen.queryByText('Team A - Team A')).toBeNull();
    expect(screen.queryByText('Team B - Team B')).toBeNull();
  });
});
