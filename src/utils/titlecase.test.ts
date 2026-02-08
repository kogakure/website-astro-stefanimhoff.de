import { describe, it, expect } from 'vitest';
import { titleCase } from './titlecase';

describe('titleCase', () => {
  it('should capitalize first letter of each word', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  it('should handle single word', () => {
    expect(titleCase('hello')).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(titleCase('')).toBe('');
  });

  it('should convert uppercase to title case', () => {
    expect(titleCase('HELLO WORLD')).toBe('Hello World');
  });

  it('should handle mixed case input', () => {
    expect(titleCase('hELLo WoRLd')).toBe('Hello World');
  });

  it('should handle multiple spaces', () => {
    expect(titleCase('hello  world')).toBe('Hello  World');
  });
});
