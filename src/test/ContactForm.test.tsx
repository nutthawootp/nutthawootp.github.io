import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../components/ui/ContactForm';

describe('ContactForm', () => {
  it('renders all form elements', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty form submission', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Get the email input
    const emailInput = screen.getByTestId('email-input');

    // Type invalid email and blur
    await user.type(emailInput, 'not-an-email');
    await user.tab(); // This will trigger blur

    // Wait for error message to appear
    const errorElement = await screen.findByText('Invalid email format');
    expect(errorElement).toBeInTheDocument();
  });

  it('shows loading state during form submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill out the form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    // Mock fetch
    const fetchMock = vi.spyOn(window, 'fetch').mockImplementation(() => 
      new Promise((resolve) => 
        setTimeout(() => 
          resolve({
            ok: true,
            json: () => Promise.resolve({ success: true })
          } as Response), 100)
      )
    );

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Check for loading state
    const loadingAlert = await screen.findByRole('alert');
    expect(loadingAlert).toHaveClass('animate-pulse');
    expect(loadingAlert).toHaveClass('bg-blue-50');

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Success!')).toBeInTheDocument();
    });

    // Cleanup
    fetchMock.mockRestore();
  });

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill out the form with valid data
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    const mockFetch = vi.spyOn(window, 'fetch').mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true })
      } as Response)
    );

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Verify form submission
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
      expect(screen.queryByText(/is required/)).not.toBeInTheDocument();
      expect(screen.getByText('Success!')).toBeInTheDocument();
    });

    mockFetch.mockRestore();
  });
});
