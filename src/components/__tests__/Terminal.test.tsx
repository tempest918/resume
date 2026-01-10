import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Terminal from '../Terminal';

describe('Terminal Component', () => {
    const mockClose = vi.fn();
    const mockToggleMatrix = vi.fn();

    const defaultProps = {
        isOpen: true,
        onClose: mockClose,
        onToggleMatrix: mockToggleMatrix,
        isMatrixActive: false,
    };

    it('renders welcome message on mount', () => {
        render(<Terminal {...defaultProps} />);
        expect(screen.getByText(/Welcome to AnthonyOS/i)).toBeInTheDocument();
    });

    it('handles "help" command', () => {
        render(<Terminal {...defaultProps} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'help' } });
        fireEvent.submit(input);

        expect(screen.getByText(/Available commands:/i)).toBeInTheDocument();
    });

    it('handles "whoami" command', () => {
        render(<Terminal {...defaultProps} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'whoami' } });
        fireEvent.submit(input);

        // Should show name from data
        expect(screen.getByText(/Anthony Lane Barnes/i)).toBeInTheDocument();
    });

    it('handles "matrix" command', () => {
        render(<Terminal {...defaultProps} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'matrix' } });
        fireEvent.submit(input);

        expect(mockToggleMatrix).toHaveBeenCalled();
        // Text should be green for entering matrix
        expect(screen.getByText(/Wake up, Neo/i)).toHaveClass('text-green-500');
    });

    it('handles matrix exit message when active', () => {
        render(<Terminal {...defaultProps} isMatrixActive={true} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'matrix' } });
        fireEvent.submit(input);

        expect(screen.getByText(/The illusion dissolves/i)).toHaveClass('text-blue-400');
    });

    it('handles "exit" command', () => {
        render(<Terminal {...defaultProps} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'exit' } });
        fireEvent.submit(input);

        expect(mockClose).toHaveBeenCalled();
    });

    it('clears history on "clear"', () => {
        render(<Terminal {...defaultProps} />);
        const input = screen.getByRole('textbox');

        // First added a command
        fireEvent.change(input, { target: { value: 'help' } });
        fireEvent.submit(input);
        expect(screen.getByText(/Available commands:/i)).toBeInTheDocument();

        // Then clear
        fireEvent.change(input, { target: { value: 'clear' } });
        fireEvent.submit(input);

        // Should not find help output anymore
        expect(screen.queryByText(/Available commands:/i)).not.toBeInTheDocument();
    });
});
