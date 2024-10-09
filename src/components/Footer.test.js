import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

// const el = {
//   image: 'https://via.placeholder.com/150',
//   name: 'Test Recipe',
//   rating: 4.5,
//   tags: ['Tag1', 'Tag2', 'Tag3'],
//   id: 1
// };

test('renders the component Footer', () => {
  render(<Footer />);

    // footer text is rendered
    const footerText = screen.getByTestId('footer-text')
    expect(footerText).toBeInTheDocument();
    expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');

    // link facebook is rendered
    const linkFacebook = screen.getByTestId('link-facebook')
    expect(linkFacebook).toBeInTheDocument();
    expect(linkFacebook).toHaveProperty('href', 'https://facebook.com/');

    // link x is rendered
    const linkX = screen.getByTestId('link-x')
    expect(linkX).toBeInTheDocument();
    expect(linkX).toHaveProperty('href', 'https://x.com/');

    // link instagram is rendered
    const linkInstagram = screen.getByTestId('link-instagram')
    expect(linkInstagram).toBeInTheDocument();
    expect(linkInstagram).toHaveProperty('href', 'https://instagram.com/');

});
