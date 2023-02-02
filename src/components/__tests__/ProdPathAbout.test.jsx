/** @format */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProdPathAbout from '../About/ProdPathAbout';

describe('ProdPathAbout component', () => {
  it('renders without crashing', () => {
    render(<ProdPathAbout />);
  });

  it('renders the correct header text', () => {
    render(<ProdPathAbout />);
    const header = screen.getByText(
      'A Better Way to Learn and Grow: The ProdigyPath Vision',
    );
    expect(header).toBeInTheDocument();
  });

  it('renders the correct first section text', () => {
    render(<ProdPathAbout />);
    const firstSection = screen.getByText(
      'Welcome to Prodigy-Path-Server, the premier mentorship application designed to connect individuals who are seeking to learn new skills or gain experience in a particular field with experienced mentors who are willing to share their knowledge and skills.',
    );
    expect(firstSection).toBeInTheDocument();
  });

  it('renders the correct second section text', () => {
    render(<ProdPathAbout />);
    const secondSection = screen.getByText(
      'We understand that entering a new industry or trying to learn new skills can be a challenging experience, and our goal is to make this process easier and more accessible for everyone. Our platform provides a space for mentors and proteges to connect and share their expertise, helping to facilitate growth and learning for all involved.',
    );
    expect(secondSection).toBeInTheDocument();
  });

  it('renders the correct third section text', () => {
    render(<ProdPathAbout />);
    const thirdSection = screen.getByText(
      'Our MVP includes a search function with filtering capabilities, a messaging feature, and the ability for mentors to approve protégés requests and share contact information. This allows for real-time communication and a seamless experience for both mentors and protégés.',
    );
    expect(thirdSection).toBeInTheDocument();
  });

  it('renders the correct fourth section text', () => {
    render(<ProdPathAbout />);
    const fourthSection = screen.getByText(
      "Whether you're just starting out in your career or looking to take your skills to the next level, Prodigy-Path-Server is here to support you every step of the way. We're dedicated to empowering the next generation of experts and helping individuals reach their full potential through mentorship. Join us today and start your journey towards success.",
    );
    expect(fourthSection).toBeInTheDocument();
  });
});
