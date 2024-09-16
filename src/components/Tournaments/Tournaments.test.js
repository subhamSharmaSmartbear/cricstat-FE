import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tournaments from './Tournaments';
import mi from '../../assets/mi.svg';
import kkr from '../../assets/kkr.svg';

describe('Tournaments Component', () => {
  test('renders without crashing', () => {
    render(<Tournaments />);
  });

});
