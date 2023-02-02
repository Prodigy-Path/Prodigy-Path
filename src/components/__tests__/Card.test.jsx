/** @format */

import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from '../SplashPage/Card';

describe('DevsAbout component', () => {
  it('renders without crashing', () => {
    render(<Card />);
  });
});
