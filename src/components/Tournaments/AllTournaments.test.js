import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AllTournaments from './AllTournaments';
import { BrowserRouter as Router } from 'react-router-dom';
import toast from 'react-hot-toast';

jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

// Mocking fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
);

describe('AllTournaments Component', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({ userId: '123' }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(
      <Router>
        <AllTournaments createTournamentModal={false} />
      </Router>
    );
  });

  test('fetches and displays tournaments', async () => {
    const tournaments = [
      {
        tournamentDTOId: '1',
        status: 'ONGOING',
        tournamentType: 'Type A',
        tournamentName: 'Tournament A',
        location: 'Location A',
        registeredTeamsCount: 5,
      },
    ];

    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(tournaments),
      })
    );

    render(
      <Router>
        <AllTournaments createTournamentModal={false} />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Tournament A')).toBeInTheDocument();
      expect(screen.getByText('Location A')).toBeInTheDocument();
      expect(screen.getByText('ONGOING')).toBeInTheDocument();
      expect(screen.getByText('Type A')).toBeInTheDocument();
      expect(screen.getByText('Already Registered Teams - 5')).toBeInTheDocument();
    });
  });

 

  test('handles fetch error', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );

    render(
      <Router>
        <AllTournaments createTournamentModal={false} />
      </Router>
    );

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Error fetching tournaments');
    });
  });

 
});
