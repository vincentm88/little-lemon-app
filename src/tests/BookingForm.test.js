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

        // Submit formw
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

    test('displays validation message if date is before today', async () => {
        render(<BrowserRouter><BookingForm onSubmit={mockOnSubmit} availableTimes={availableTimes} updateTimes={mockUpdateTimes} navigate={mockNavigate} /></BrowserRouter>);

        // Select a date before today
        fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2022-01-01' } });

        // Click the submit button
        fireEvent.click(screen.getByText('Submit Reservation'));

        // Wait for validation message to be displayed
        // Since we can't directly test the alert, we can check if the form remains unsubmitted
        expect(mockOnSubmit).not.toHaveBeenCalled(); // Expect onSubmit not to be called
    });

    test('displays validation message if time is not from available times', async () => {
        render(<BrowserRouter><BookingForm onSubmit={mockOnSubmit} availableTimes={availableTimes} updateTimes={mockUpdateTimes} navigate={mockNavigate} /></BrowserRouter>);

        // Select a valid date
        fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2024-04-30' } });

        // Select a time not from available times
        fireEvent.change(screen.getByLabelText('Time:'), { target: { value: '8:00 AM' } });

        // Click the submit button
        fireEvent.click(screen.getByText('Submit Reservation'));

        // Since we can't directly test the alert, we can check if the form remains unsubmitted
        expect(mockOnSubmit).not.toHaveBeenCalled(); // Expect onSubmit not to be called
    });


    test('shows HTML5 validation error for invalid guest count', async () => {
        render(<BrowserRouter><BookingForm onSubmit={mockOnSubmit} availableTimes={availableTimes} updateTimes={mockUpdateTimes} navigate={mockNavigate} /></BrowserRouter>);

        // Select a valid date
        fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2024-04-30' } });

        // Select a valid time
        fireEvent.change(screen.getByLabelText('Time:'), { target: { value: '12:00 PM' } });

        // Enter an invalid number of guests (outside range)
        fireEvent.change(screen.getByLabelText('Number of guests:'), { target: { value: '15' } });

        // Trigger form submission (assuming a submit button)
        fireEvent.click(screen.getByText('Submit Reservation'));

        // Since we can't directly test the alert, we can check if the form remains unsubmitted
        expect(mockOnSubmit).not.toHaveBeenCalled(); // Expect onSubmit not to be called
    });

});
