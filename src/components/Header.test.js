import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header'; 
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));


jest.mock('./Utilities/CurrentDateTime', () => () => <div>Current DateTime Component</div>);

describe('Header', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'user') {
        return JSON.stringify({ username: 'TestUser' });
      }
      return null;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders CurrentDateTime component', () => {
    render(<Header />);
    
    expect(screen.getByText('Current DateTime Component')).toBeInTheDocument();
  });

  test('renders Register button when user is not logged in', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);

    render(<Header />);
    
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  test('navigates to register page when Register button is clicked', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);

    render(<Header />);
    
    fireEvent.click(screen.getByText('Register'));
    
    expect(mockNavigate).toHaveBeenCalledWith('/register');
  });

  test('renders username when user is logged in', () => {
    render(<Header />);
    
    expect(screen.getByText('TestUser')).toBeInTheDocument();
  });
});
