import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Teams from './Teams'; 

// Mock the components used in Teams
jest.mock('../components/Teams/AllTeams', () => () => <div>All Teams Component</div>);
jest.mock('../components/Modal/CreateTeamModal', () => ({ setCreateTeamModal }) => (
  <div>
    Create Team Modal
    <button onClick={() => setCreateTeamModal('false')}>Close</button>
  </div>
));

describe('Teams', () => {
  const mockUser = {
    name: 'Test Coach',
    role: 'COACH',
  };

  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'user') {
        return JSON.stringify(mockUser);
      }
      return null;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders All Teams by default', () => {
    render(<Teams />);
    
    expect(screen.getByText('All Teams Component')).toBeInTheDocument();
  });

  test('renders Create Team button for coach user', () => {
    render(<Teams />);
    
    expect(screen.getByText('Create Team')).toBeInTheDocument();
  });

  test('opens Create Team Modal when Create Team button is clicked', () => {
    render(<Teams />);
    
    fireEvent.click(screen.getByText('Create Team'));
    
    expect(screen.getByText('Create Team Modal')).toBeInTheDocument();
  });

  test('closes Create Team Modal when Close button is clicked', () => {
    render(<Teams />);
    
    fireEvent.click(screen.getByText('Create Team'));
    
    fireEvent.click(screen.getByText('Close'));
    
    expect(screen.queryByText('Create Team Modal')).toBeNull();
  });
});
