import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'

import BookingForm from '../components/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = jest.fn();
const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];

const mockOnSubmit = jest.fn().mockResolvedValueOnce(true);
const mockUpdateTimes = jest.fn();

describe('BookingForm', () => {
    test('renders static text correctly', () => {
        render(<BrowserRouter><BookingForm availableTimes={availableTimes} navigate={mockNavigate} /></BrowserRouter>);

        // Assert that static text is rendered correctly
        expect(screen.getByText('Date:')).toBeInTheDocument();
        expect(screen.getByText('Time:')).toBeInTheDocument();
        expect(screen.getByText('Number of guests:')).toBeInTheDocument();
        expect(screen.getByText('Occasion:')).toBeInTheDocument();
        expect(screen.getByText('Submit Reservation')).toBeInTheDocument();
    });

    test('submits form when submit button is clicked', async () => {
        const mockOnSubmit = jest.fn();
        const mockUpdateTimes = jest.fn();
        render(<BrowserRouter><BookingForm onSubmit={mockOnSubmit} availableTimes={availableTimes} updateTimes={mockUpdateTimes} navigate={mockNavigate} /></BrowserRouter>);

        // Fill in form fields (you can skip this if you're not testing form submission)
        fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2024-04-30' } });
        fireEvent.change(screen.getByLabelText('Time:'), { target: { value: '12:00 PM' } });
        fireEvent.change(screen.getByLabelText('Number of guests:'), { target: { value: '4' } });
        fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Birthday' } });

        // Submit form
        fireEvent.click(screen.getByText('Submit Reservation'));

        // Wait for the form submission to complete
        await waitFor(() => {
            // Assert any post-submission state changes if necessary
            expect(screen.getByText('Booking Confirmation...')).toBeInTheDocument();
        });

        // Assert that updateTimes is called with correct data
        expect(mockUpdateTimes).toHaveBeenCalledWith('2024-04-30');
    });

    test('updates times when date is changed', async () => {
        render(<BrowserRouter><BookingForm onSubmit={mockOnSubmit} availableTimes={availableTimes} updateTimes={mockUpdateTimes} navigate={mockNavigate} /></BrowserRouter>);

        // Select a date
        fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2024-04-30' } });

        // Wait for the updateTimes function to be called
        await waitFor(() => {
            // Assert that updateTimes is called with correct data
            expect(mockUpdateTimes).toHaveBeenCalledWith('2024-04-30');
        });

    });

    

});
