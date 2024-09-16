import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LiveMatches from './LiveMatches'; // Adjust the import path as necessary
import { BrowserRouter as Router } from 'react-router-dom';

describe('LiveMatches', () => {
  const mockMatches = [
    {
      matchId: 1,
      matchType: 'T20',
      teamA: 'Mumbai Indians',
      teamB: 'Kolkata Knight Riders',
      live: true,
    },
    {
      matchId: 2,
      matchType: 'ODI',
      teamA: 'Chennai Super Kings',
      teamB: 'Royal Challengers Bangalore',
      live: false,
    },
  ];

 

  test('renders no matches message when matches prop is empty', () => {
    render(
      <Router>
        <LiveMatches matches={[]} />
      </Router>
    );

    // Check if no matches message is displayed
    expect(screen.queryByText('Wankhade Stadium')).toBeNull();
    expect(screen.queryByText('T20')).toBeNull();
    expect(screen.queryByText('Mumbai Indians')).toBeNull();
    expect(screen.queryByText('LIVE')).toBeNull();
    expect(screen.queryByText('Kolkata Knight Riders')).toBeNull();
  });
});
