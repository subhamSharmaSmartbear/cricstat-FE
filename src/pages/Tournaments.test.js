import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tournaments from './Tournaments'; 

// Mock the components used in Tournaments
jest.mock('../components/Tournaments/AllTournaments', () => () => <div>All Tournaments Component</div>);
jest.mock('../components/Modal/CreateTournamentModal', () => ({ setCreateTournamentModal }) => (
  <div>
    Create Tournament Modal
    <button onClick={() => setCreateTournamentModal('false')}>Close</button>
  </div>
));

describe('Tournaments', () => {
  const mockUser = {
    name: 'Test Coach',
    role: 'ADMIN',
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

  test('renders All Tournaments by default', () => {
    render(<Tournaments />);
    
   
    expect(screen.getByText('All Tournaments Component')).toBeInTheDocument();
  });

  test('renders Create Tournament button for admin user', () => {
    render(<Tournaments />);
    
   
    expect(screen.getByText('Create Tournament')).toBeInTheDocument();
  });

  test('opens Create Tournament Modal when Create Tournament button is clicked', () => {
    render(<Tournaments />);
    
   
    fireEvent.click(screen.getByText('Create Tournament'));
    
    
    expect(screen.getByText('Create Tournament Modal')).toBeInTheDocument();
  });

  test('closes Create Tournament Modal when Close button is clicked', () => {
    render(<Tournaments />);
    
    
    fireEvent.click(screen.getByText('Create Tournament'));
    
    fireEvent.click(screen.getByText('Close'));
    
    expect(screen.queryByText('Create Tournament Modal')).toBeNull();
  });
});
