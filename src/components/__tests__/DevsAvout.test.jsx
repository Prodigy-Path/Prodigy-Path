/** @format */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DevsAbout from '../About/DevsAbout';

describe('DevsAbout component', () => {
  it('renders without crashing', () => {
    render(<DevsAbout />);
  });

  it('renders the title', () => {
    render(<DevsAbout />);
    expect(
      screen.getByText('Meet the Minds Behind Prodigy Path'),
    ).toBeInTheDocument();
  });

  it('renders the team description', () => {
    render(<DevsAbout />);
    expect(screen.getByText(/Our team consists of four/)).toBeInTheDocument();
  });

  it('renders the first developer name and description', () => {
    render(<DevsAbout />);
    expect(screen.getByText('Seth Pierce')).toBeInTheDocument();
    expect(
      screen.getByText(/I am a full-stack JavaScript software developer/),
    ).toBeInTheDocument();
  });

  it('renders the second developer name and description', () => {
    render(<DevsAbout />);
    expect(screen.getByText('Lewis Benson')).toBeInTheDocument();
    expect(
      screen.getByText(/As a full-stack developer with a diverse/),
    ).toBeInTheDocument();
  });

  it('renders the third developer name and description', () => {
    render(<DevsAbout />);
    expect(screen.getByText('Elias Staehle')).toBeInTheDocument();
    expect(
      screen.getByText(/With a background in machining and leading/),
    ).toBeInTheDocument();
  });

  it('renders the fourth developer name and description', () => {
    render(<DevsAbout />);
    expect(screen.getByText('Steven Rejdukowski')).toBeInTheDocument();
    expect(
      screen.getByText(/I bring 7 years of eCommerce management/),
    ).toBeInTheDocument();
  });
});
