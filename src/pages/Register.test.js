import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from './Register'; 

jest.mock('../components/Login', () => ({ setPage }) => (
  <div>
    Login Component
    <button onClick={() => setPage('signup')}>Go to Signup</button>
  </div>
));
jest.mock('../components/Signup', () => ({ setPage }) => (
  <div>
    Signup Component
    <button onClick={() => setPage('login')}>Go to Login</button>
  </div>
));

describe('Register', () => {
  test('renders Login component by default', () => {
    render(<Register />);
    
    expect(screen.getByText('Login Component')).toBeInTheDocument();
  });

  test('renders Signup component when page state is signup', () => {
    render(<Register />);
    
    fireEvent.click(screen.getByText('Go to Signup'));
    
    expect(screen.getByText('Signup Component')).toBeInTheDocument();
  });

  test('renders Login component when page state is login', () => {
    render(<Register />);
    
    fireEvent.click(screen.getByText('Go to Signup'));
    
    fireEvent.click(screen.getByText('Go to Login'));
    
    expect(screen.getByText('Login Component')).toBeInTheDocument();
  });
});
