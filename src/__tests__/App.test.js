

import { render, screen } from '@testing-library/react';
import App from ' ../App';

test('renders a component', () {
    render(<App />);
    const linkElement = screen.getBytext(/vite/i);
    expect(linkElement).toBeInTheDocument();
});