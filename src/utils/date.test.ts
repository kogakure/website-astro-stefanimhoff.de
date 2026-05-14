import { describe, expect, it } from 'vitest';
import { dateToFormat, dateToISO } from './date';

describe('date', () => {
	describe('dateToFormat', () => {
		it('should format date with default format', () => {
			const date = new Date('2024-01-15');
			const result = dateToFormat(date);

			// Default format is 'MMMM do, yyyy'
			expect(result).toBe('January 15th, 2024');
		});

		it('should format date with custom format', () => {
			const date = new Date('2024-01-15');
			const result = dateToFormat(date, 'yyyy-MM-dd');

			expect(result).toBe('2024-01-15');
		});

		it('should handle different date formats', () => {
			const date = new Date('2024-12-25');

			expect(dateToFormat(date, 'MMMM do, yyyy')).toBe('December 25th, 2024');
			expect(dateToFormat(date, 'dd/MM/yyyy')).toBe('25/12/2024');
			expect(dateToFormat(date, 'MMM dd, yyyy')).toBe('Dec 25, 2024');
		});

		it('should handle ordinal dates correctly', () => {
			expect(dateToFormat(new Date('2024-01-01'), 'MMMM do')).toBe('January 1st');
			expect(dateToFormat(new Date('2024-01-02'), 'MMMM do')).toBe('January 2nd');
			expect(dateToFormat(new Date('2024-01-03'), 'MMMM do')).toBe('January 3rd');
			expect(dateToFormat(new Date('2024-01-04'), 'MMMM do')).toBe('January 4th');
			expect(dateToFormat(new Date('2024-01-21'), 'MMMM do')).toBe('January 21st');
			expect(dateToFormat(new Date('2024-01-22'), 'MMMM do')).toBe('January 22nd');
		});

		it('should handle time in format', () => {
			const date = new Date('2024-01-15T14:30:00');
			const result = dateToFormat(date, 'yyyy-MM-dd HH:mm');

			expect(result).toContain('2024-01-15');
			expect(result).toContain('14:30');
		});

		it('should handle year only', () => {
			const date = new Date('2024-01-15');
			const result = dateToFormat(date, 'yyyy');

			expect(result).toBe('2024');
		});

		it('should handle month and year', () => {
			const date = new Date('2024-01-15');
			const result = dateToFormat(date, 'MMMM yyyy');

			expect(result).toBe('January 2024');
		});
	});

	describe('dateToISO', () => {
		it('should format date to ISO 8601 format', () => {
			const date = new Date('2024-01-15T10:30:00Z');
			const result = dateToISO(date);

			// ISO format includes timezone offset
			expect(result).toMatch(/2024-01-15T\d{2}:\d{2}:\d{2}/);
		});

		it('should handle different dates in ISO format', () => {
			const date1 = new Date('2020-12-31T23:59:59Z');
			const date2 = new Date('2025-06-15T12:00:00Z');

			// Note: moment format may convert to local timezone
			const result1 = dateToISO(date1);
			const result2 = dateToISO(date2);

			expect(result1).toMatch(/2020-12-31|2021-01-01/); // May be adjusted for timezone
			expect(result2).toMatch(/2025-06-15/);
		});

		it('should return valid ISO 8601 string', () => {
			const date = new Date('2024-01-15');
			const result = dateToISO(date);

			// Should match ISO 8601 format pattern
			expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
		});
	});
});
