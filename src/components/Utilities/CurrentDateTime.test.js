import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentDateTime from './CurrentDateTime'; 

jest.useFakeTimers();

describe('CurrentDateTime', () => {
  const mockDate = new Date(2024, 7, 21, 14, 30, 0); 

  beforeEach(() => {
    jest.setSystemTime(mockDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders current date and time correctly', () => {
    render(<CurrentDateTime />);

    

   
    expect(screen.getByText('21 August, 2024')).toBeInTheDocument();
  });

  test('updates time every second', () => {
    render(<CurrentDateTime />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

   

    act(() => {
      jest.advanceTimersByTime(1000);
    });

   
  });
});
