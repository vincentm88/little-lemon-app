import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import BookingForm from '../components/BookingForm';

const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];
const mockUpdateTimes = jest.fn();
describe('BookingForm', () => {
    test('renders static text correctly', () => {
        render(<BookingForm availableTimes={availableTimes} />);


        // Assert that static text is rendered correctly
        expect(screen.getByText('Date:')).toBeInTheDocument();
        expect(screen.getByText('Time:')).toBeInTheDocument();
        expect(screen.getByText('Number of guests:')).toBeInTheDocument();
        expect(screen.getByText('Occasion:')).toBeInTheDocument();
        expect(screen.getByText('Submit Reservation')).toBeInTheDocument();
    });

    test('submits form when submit button is clicked', () => {
        const mockOnSubmit = jest.fn();
        render(<BookingForm onSubmit={mockOnSubmit} availableTimes={availableTimes} updateTimes={mockUpdateTimes} />);

        // Fill in form fields (you can skip this if you're not testing form submission)
        fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2024-04-30' } });
        fireEvent.change(screen.getByLabelText('Time:'), { target: { value: '12:00 PM' } });
        fireEvent.change(screen.getByLabelText('Number of guests:'), { target: { value: '4' } });
        fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Birthday' } });

        // Submit form
        fireEvent.click(screen.getByText('Submit Reservation'));

        // Assert that updateTimes is called with correct data
        expect(mockUpdateTimes).toHaveBeenCalledWith('2024-04-30');
    });
});
