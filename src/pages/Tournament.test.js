import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tournament from './Tournament'; 
import { useParams } from 'react-router-dom';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Tournament', () => {
  const mockTournament = {
    status: 'PLANNED',
    tournamentName: 'Test Tournament',
    location: 'Test Location',
    registeredTeamsCount: 4,
  };

  const mockUser = {
    name: 'Test Coach',
    role: 'ADMIN',
  };

  beforeEach(() => {
    useParams.mockReturnValue({ id: '1' });

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'user') {
        return JSON.stringify(mockUser);
      }
      return null;
    });

    global.fetch = jest.fn((url) => {
      if (url.includes('/get-tournament/')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockTournament),
        });
      }
      if (url.includes('/matches/group-stages')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ 'Group A': [], 'Group B': [] }),
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

  test('renders tournament details when data is available', async () => {
    render(<Tournament />);
    
    await waitFor(() => {
      expect(screen.getByText(mockTournament.status)).toBeInTheDocument();
      expect(screen.getByText(mockTournament.tournamentName)).toBeInTheDocument();
      expect(screen.getByText(mockTournament.location)).toBeInTheDocument();
    });
  });

  test('renders disabled "Start" button if tournament is ongoing and team count is not 6', async () => {
    render(<Tournament />);
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
    });
  });

  test('hides "Start" button if user is not admin', async () => {
    const nonAdminUser = { ...mockUser, role: 'user' };

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'user') {
        return JSON.stringify(nonAdminUser);
      }
      return null;
    });

    render(<Tournament />);
    
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: 'Start' })).toBeNull();
    });
  });
});
