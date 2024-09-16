import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AllTeams from './AllTeams'; // Adjust the import path as necessary
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../Utilities/Error', () => () => <div>Error Component</div>);

describe('AllTeams', () => {
  const mockTeams = [
    {
      teamID: 1,
      name: 'Team A',
      coach: 'Coach A',
      teamCaptain: 'Captain A',
    },
    {
      teamID: 2,
      name: 'Team B',
      coach: 'Coach B',
      teamCaptain: 'Captain B',
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url.includes('/list-teams-summary')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockTeams),
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

  test('renders team details correctly', async () => {
    render(
      <Router>
        <AllTeams createTeamModal={false} />
      </Router>
    );

    await waitFor(() => {
      mockTeams.forEach(team => {
        expect(screen.getByText(team.name)).toBeInTheDocument();
        expect(screen.getByText(`Coach - ${team.coach}`)).toBeInTheDocument();
        expect(screen.getByText(`Captain - ${team.teamCaptain}`)).toBeInTheDocument();
      });
    });
  });

  test('renders Error component when no teams are available', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );

    render(
      <Router>
        <AllTeams createTeamModal={false} />
      </Router>
    );

   
  });
});
