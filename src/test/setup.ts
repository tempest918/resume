import '@testing-library/jest-dom';
import { vi } from 'vitest';

// JSDOM doesn't implement scrollIntoView
window.Element.prototype.scrollIntoView = vi.fn();
